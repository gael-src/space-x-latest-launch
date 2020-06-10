const axios = require("axios");
const spaceXapi = "https://api.spacexdata.com/v3/launches/latest";

let finder = async () => {
  try {
    const response = await axios.get(spaceXapi);
    const missionNumber = response.data.flight_number;
    const missionName = response.data.mission_name;
    const rocketName = response.data.rocket.rocket_name;
    const launchDate = response.data.launch_date_utc;
    const launchVideo = response.data.links.video_link;
    const moreInfo = response.data.links.reddit_campaign;
    console.log(`Space X latest Mission: ${missionName}`);
    console.log(`Mission number: ${missionNumber}`);
    console.log(`Rocket launched: ${rocketName}`);
    console.log(`UTC Launch time: ${launchDate}`);
    console.log(`Watch the launch video: ${launchVideo}`);
    console.log(`For informations check: ${moreInfo}`);
  } catch (error) {
    console.log(`  Error, try again.`);
  }
};
finder();
