const axios = require("axios");
const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "pingReportIds.txt");

async function createPingReports() {
  fs.writeFileSync(filePath, "");
  while (true) {
    const response = await axios.post(
      "http://localhost:3000/api/ping-reports",
      {
        ipAddress: "200.129.73.211",
        packetsTransmitted: 1255,
        packetsReceived: 1239,
        packetLoss: 1.2749,
        time: 9993,
        rttMin: 118.327,
        rttAvg: 118.98,
        rttMax: 139.231,
        rttMDev: 0.963,
      },
    );

    const id = response.data.data.id;
    fs.appendFileSync(filePath, `${id}\n`);
  }
}

createPingReports();
