import { NextResponse } from "next/server";
import * as cheerio from "cheerio";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const username = searchParams.get("username");
  const year = searchParams.get("year");

  if (!username) {
    return NextResponse.json({ error: "Username required" }, { status: 400 });
  }

  try {
    const yearParams = year ? `?from=${year}-12-01&to=${year}-12-31` : "";
    const res = await fetch(`https://github.com/users/${username}/contributions${yearParams}`, {
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      throw new Error("Failed to fetch GitHub contributions");
    }

    const html = await res.text();
    const $ = cheerio.load(html);

    const overviewMatch = html.match(/data-percentages="([^"]+)"/);
    if (!overviewMatch) {
      return NextResponse.json({ enabled: false });
    }
    const percentages = JSON.parse(overviewMatch[1].replace(/&quot;/g, '"'));

    const contributedToContainer = $('div.wb-break-word[data-repository-hovercards-enabled]');
    const contributedNodes: { type: string; href?: string; value: string }[] = [];

    contributedToContainer.contents().each((_, el) => {
      if (el.type === 'text') {
        const text = $(el).text().replace(/\s+/g, ' ');
        if (text.trim() || text === ' ') {
          contributedNodes.push({ type: 'text', value: text });
        }
      } else if ('tagName' in el && el.tagName === 'a') {
        contributedNodes.push({ type: 'link', href: $(el).attr('href'), value: $(el).text().trim() });
      } else if ('tagName' in el && el.tagName === 'span') {
        const text = $(el).text().replace(/\s+/g, ' ').trim();
        if (text) contributedNodes.push({ type: 'text', value: ' ' + text });
      }
    });

    const organizations: { href?: string; img?: string; text: string }[] = [];
    $('a.js-org-filter-link').each((_, el) => {
      const $el = $(el);
      const href = $el.attr('href');
      const img = $el.find('img').attr('src');
      const text = $el.text().trim();
      if (text !== 'overview') {
        organizations.push({ href, img, text });
      }
    });

    return NextResponse.json({
      enabled: true,
      data: percentages,
      contributedNodes,
      organizations
    });
  } catch (error) {
    console.error("Error fetching GitHub activity overview:", error);
    return NextResponse.json({ enabled: false });
  }
}
