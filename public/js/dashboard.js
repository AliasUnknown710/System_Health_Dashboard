fetch("../metrics.json")
  .then(res => res.json())
  .then(data => {
    const lines = [
      `Hostname: ${data.hostname}`,
      `OS: ${data.os}`,
      `CPU Usage: ${data.cpu_percent}%`,
      `Memory Usage: ${data.memory_percent}%`,
      `Disk Usage: ${data.disk_percent}%`,
      `Uptime (boot timestamp): ${data.uptime_seconds}`
    ];
    document.getElementById("output").textContent = lines.join("\n");
  })
  .catch(() => {
    document.getElementById("output").textContent = "Failed to load metrics.";
  });
