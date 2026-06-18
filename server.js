import express from "express";
import { JOBS } from "./data/jobs.js";
import { APPLICATIONS } from "./data/applications.js";
import { TALENTS } from "./data/talents.js";

const app = express();
app.use(express.json());

// POST /open-apis/auth/v3/tenant_access_token/internal
app.post("/open-apis/auth/v3/tenant_access_token/internal", (req, res) => {
  const { app_id } = req.body || {};
  if (!app_id) {
    return res.json({ code: 10003, msg: "app_id is required", tenant_access_token: "", expire: 0 });
  }
  res.json({ code: 0, msg: "ok", tenant_access_token: "mock_token_" + Date.now(), expire: 7200 });
});

// GET /open-apis/hire/v1/jobs
app.get("/open-apis/hire/v1/jobs", (req, res) => {
  const { page_size = "20", page_token = "0", job_status } = req.query;
  const size = Math.min(parseInt(page_size) || 20, 20);
  const offset = parseInt(page_token) || 0;
  let filtered = job_status ? JOBS.filter(j => String(j.job_status) === String(job_status)) : JOBS;
  const pageItems = filtered.slice(offset, offset + size);
  const hasMore = offset + size < filtered.length;
  res.json({
    code: 0, msg: "ok",
    data: {
      items: pageItems.map(j => ({ job_id: j.job_id, job_name: j.job_name, department: j.department, job_status: j.job_status })),
      page_token: hasMore ? String(offset + size) : "",
      has_more: hasMore,
      total: filtered.length,
    }
  });
});

// GET /open-apis/hire/v1/applications
app.get("/open-apis/hire/v1/applications", (req, res) => {
  const { job_id, page_size = "20", page_token = "0" } = req.query;
  const size = Math.min(parseInt(page_size) || 20, 20);
  const offset = parseInt(page_token) || 0;
  let filtered = job_id ? APPLICATIONS.filter(a => a.job_id === job_id) : APPLICATIONS;
  const pageItems = filtered.slice(offset, offset + size);
  const hasMore = offset + size < filtered.length;
  res.json({
    code: 0, msg: "ok",
    data: {
      items: pageItems.map(a => ({ application_id: a.application_id, job_id: a.job_id, talent_id: a.talent_id, stage: a.stage, stage_entered_at: a.stage_entered_at, create_time: a.stage_entered_at })),
      page_token: hasMore ? String(offset + size) : "",
      has_more: hasMore,
      total: filtered.length,
    }
  });
});

// GET /open-apis/hire/v1/talents/:talent_id
app.get("/open-apis/hire/v1/talents/:talent_id", (req, res) => {
  const talent = TALENTS[req.params.talent_id];
  if (!talent) return res.json({ code: 1254000, msg: "talent not found", data: null });
  res.json({ code: 0, msg: "ok", data: { talent } });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Mock API running on port ${PORT}`));
