# Why Implement Full-Link Monitoring for Front-End Services?

There are typically two methods to troubleshoot issues in front-end services:

1. **Reproducing the issue** and attempting to resolve it.
2. **Using user-provided information** to analyze full-link monitoring, inspecting the upstream and downstream paths to pinpoint where the issue occurred and fixing it accordingly.

## Improvement in Troubleshooting

When receiving user feedback, instead of immediately attempting to reproduce the issue as in traditional testing methods, we follow a more optimized process:

1. **Full-Link Monitoring**: First, we check the full-link logs for any alerts or anomalies to determine if the issue is widespread (common).
2. **User-Specific Logs**: If the issue is not common, we use the information provided by the user (such as user ID and time range) to query the user’s full-link logs. This includes front-end script error logs, front-end request logs, business configuration validation, and more.

This approach allows for quicker identification and resolution of problems without the need to reproduce the issue manually, enhancing overall efficiency.
