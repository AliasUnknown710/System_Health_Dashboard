# 📊 System Health Dashboard

Scripts to collect system metrics and display them in a local HTML dashboard. Built for offline monitoring, kiosk display, or quick visibility.

---

## 🔧 Tools Included

| File | Description |
|------|-------------|
| `collect_metrics.sh` | Prints CPU, memory, disk, and uptime to terminal. |
| `metrics_to_json.py` | Outputs system metrics to `metrics.json`. |
| `public/index.html` | Loads and displays metrics in browser. |
| `public/css/style.css` | Dark theme styling for dashboard. |
| `public/js/dashboard.js` | Loads and formats metrics from JSON. |

---

## 🚀 Usage

bash

bash collect_metrics.sh

python3 metrics_to_json.py

open public/index.html

• 	Run  before opening the dashboard.
• 	Customize  and  as needed.

---

## 🧠 Notes
• 	Extend with service status, network latency, or alerting.
• 	Ideal for local monitoring, Raspberry Pi dashboards, or offline status pages.
