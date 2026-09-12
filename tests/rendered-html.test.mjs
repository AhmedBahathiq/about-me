import assert from "node:assert/strict";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);
  return worker.fetch(
    new Request("http://localhost/", { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("server-renders Ahmed Bahathiq's portfolio", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /أحمد يوسف عمر باحاذق/);
  assert.match(html, /دربك الدراسي/);
  assert.match(html, /https:\/\/www\.darbakstudy\.com\//);
  assert.match(html, /https:\/\/apps\.apple\.com\/app\/id6794216378/);
  assert.match(html, /آيتوبيا/);
  assert.match(html, /https:\/\/aitopia\.ahmedbahathiq\.com\//);
  assert.match(html, /https:\/\/github\.com\/AhmedBahathiq\/aitopia-agent-world/);
  assert.match(html, /لذيذ يا حامض/);
  assert.match(html, /مشاريع منجزة/);
  assert.match(html, /https:\/\/ahmedbahathiq\.github\.io\/cv\//);
  assert.doesNotMatch(html, /ahmedbahadik/);
  assert.match(html, /مقدمة في الذكاء الاصطناعي/);
  assert.match(html, /HTML وCSS وJavaScript/);
  assert.match(html, /مساري الأكاديمي/);
  assert.match(html, /السيرة الذاتية/);
  assert.match(html, /ما يميزني/);
  assert.match(html, /أجمع بين فهم الذكاء الاصطناعي وسرعة تحويل الأفكار إلى نماذج عملية\./);
  assert.doesNotMatch(html, /مع اهتمام بالبساطة/);
  assert.match(html, /Canva/);
  assert.doesNotMatch(html, /السيرة الرقمية|طريقتي في العمل/);
  assert.doesNotMatch(html, /4\.70|4\.86|GPA|المعدل من 5|التفوق الأكاديمي|Academic Excellence/);
  assert.match(html, /Ahmed_Bahathiq_CV\.pdf/);
  assert.match(html, /https:\/\/www\.tiktok\.com\/@_41ff_/);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape/);
});

