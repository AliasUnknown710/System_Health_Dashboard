import json, psutil, platform, socket

metrics = {
    "hostname": socket.gethostname(),
    "os": platform.system(),
    "cpu_percent": psutil.cpu_percent(interval=1),
    "memory_percent": psutil.virtual_memory().percent,
    "disk_percent": psutil.disk_usage("/").percent,
    "uptime_seconds": psutil.boot_time()
}

with open("metrics.json", "w") as f:
    json.dump(metrics, f, indent=2)

print("[✓] Metrics written to metrics.json")
