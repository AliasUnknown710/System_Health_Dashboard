#!/bin/bash

echo "[✓] CPU Usage:"
top -bn1 | grep "Cpu(s)" | awk '{print $2 + $4 "%"}'

echo "[✓] Memory Usage:"
free -m | awk '/Mem:/ {printf "%sMB used / %sMB total\n", $3, $2}'

echo "[✓] Disk Usage:"
df -h / | awk 'NR==2 {print $3 " used / " $2 " total"}'

echo "[✓] Uptime:"
uptime -p
