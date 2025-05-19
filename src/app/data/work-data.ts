import BDOPlannerDesktop from "@portfolio/assets/bdoplanner-desktop.png";
import BDOPlannerMobile from "@portfolio/assets/bdoplanner-mobile.png";
import BDOPlannerThumbnail from "@portfolio/assets/bdoplanner-thumbnail.png";
import iASDesktop from "@portfolio/assets/ias-desktop.png";
import iASMobile from "@portfolio/assets/ias-mobile.png";
import iASThumbnail from "@portfolio/assets/ias-thumbnail.png";
import OttisAppDesktop from "@portfolio/assets/ottisapp-desktop.png";
import OttisAppMobile from "@portfolio/assets/ottisapp-mobile.png";
import OttisAppThumbnail from "@portfolio/assets/ottisapp-thumbnail.png";
import RMSPublishingDesktop from "@portfolio/assets/rmspublishing-desktop.png";
import RMSPublishingThumbnail from "@portfolio/assets/rmspublishing-thumbnail.png";
import RMSStudyScheduleDesktop from "@portfolio/assets/rmsstudyschedule-desktop.png";
import RMSStudyScheduleMobile from "@portfolio/assets/rmsstudyschedule-mobile.png";
import RMSStudyScheduleThumbnail from "@portfolio/assets/rmsstudyschedule-thumbnail.png";
import The8BitDrummerDesktop from "@portfolio/assets/the8bitdrummer-desktop.png";
import The8BitDrummerMobile from "@portfolio/assets/the8bitdrummer-mobile.png";
import The8BitDrummerThumbnail from "@portfolio/assets/the8bitdrummer-thumbnail.png";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

type WorkTags =
    | "Bootstrap"
    | "External APIs"
    | "JQuery"
    | "MySQL"
    | "PHP"
    | "Ember.js"
    | "Material Design"
    | "MongoDB"
    | "C#.NET"
    | "MSSQL"
    | "VB.NET";

export interface IWorkData {
    id: string;
    label: string;
    type: "freelance" | "personal" | "employment";
    url: string;
    url_active: boolean;
    tags: WorkTags[];
    content_blocks: {
        title:
            | "Project Brief"
            | "Website Design"
            | "Design & Development"
            | "CMS Development"
            | "3rd Party Integrations"
            | "Notes";
        body: string;
    }[];
    images: {
        desktop?: StaticImport;
        mobile?: StaticImport;
        thumbnail?: StaticImport;
    };
}

export const WORK_DATA: IWorkData[] = [
    {
        id: "8bitdrummer",
        label: "The8BitDrummer",
        type: "freelance",
        url: "https://the8bitdrummer.com",
        url_active: true,
        tags: ["Bootstrap", "External APIs", "JQuery", "MySQL", "PHP"],
        content_blocks: [
            {
                title: "Project Brief",
                body: "Jerod “The8BitDrummer” Colins is a Streamer on Twitch who plays Drums along to song requests from his Audience. He needed a platform to allow people to easily give song suggestions based on different parameters, as well as a simple system to allow him and his team to manage it.",
            },
            {
                title: "Website Design",
                body: "The purpose of the website itself was to allow viewers to easily see upcoming songs for that day and see what had been played in the past, it also had a small showcase of the latest videos posted to his YouTube account. Finally it also gave information on the charities that The8BitDrummer had supported. The Website also needed to be Mobile friendly due to the large number of mobile based viewers.",
            },
            {
                title: "CMS Development",
                body: "A simple CMS was created to allow content to be managed for the site, as well as handling the administration back end. This allowed his team to see a more detailed breakdown of requests and to moderate them where needed, including adding, modifying and removing them.",
            },
            {
                title: "3rd Party Integrations",
                body: "The website and CMS integrated with various other platforms including; Twitch, which allowed people to directly place requests through the Twitch Website, detected when people had “Subscribed” to The8BitDrummers twitch channel and was also used for OAuth on the administration system. Streamlabs, which is where people would donate to the channel, upon donating the website would hook into their API to create song request entries based on the contents and value of their donation,",
            },
        ],
        images: {
            desktop: The8BitDrummerDesktop,
            mobile: The8BitDrummerMobile,
            thumbnail: The8BitDrummerThumbnail,
        },
    },
    {
        id: "bdoplanner",
        label: "BDO Planner",
        type: "personal",
        url: "https://bdoplanner.com",
        url_active: false,
        tags: [
            "Ember.js",
            "External APIs",
            "Material Design",
            "MongoDB",
            "PHP",
        ],
        content_blocks: [
            {
                title: "Project Brief",
                body: "BDO Planner is a passion project, original taken over as a maintainer, I decided to completely rewrite the project from the ground up in Ember.js to help me with learning more about using different frameworks. BDO Planner serves as a tool to help players of the Black Desert Online Game with planning their character development.",
            },
            {
                title: "Design & Development",
                body: "The website makes use of Googles Material Design as the core, with various inspirations taken from the game itself for parts of the interface, which also allows it to easily work on mobile devices. The website itself makes use of a PHP API to pull various the different entities for use, such as the classes and items, as well as saving users configurations and such.",
            },
            {
                title: "3rd Party Integrations",
                body: "To alleviate building a custom user account and login system, the website intergrates with Discords API through OAuth to allow users to login to BDO Planner using their Discord credentials. It also integrates with Patreons API to show supporters of the project, and to reward the supporters by linking their Discord and Patreon accounts together.",
            },
            {
                title: "Notes",
                body: "As of October 2022, this website was taken down due to being generally not needed by the community. The source code is still stored and available on request.",
            },
        ],
        images: {
            desktop: BDOPlannerDesktop,
            mobile: BDOPlannerMobile,
            thumbnail: BDOPlannerThumbnail,
        },
    },
    {
        id: "rmsstudyschedule",
        label: "RMS Study Schedule",
        type: "employment",
        url: "https://schedule.rmse-learning.co.uk",
        url_active: true,
        tags: ["C#.NET", "Ember.js", "Material Design", "MSSQL"],
        content_blocks: [
            {
                title: "Project Brief",
                body: "The goal of this project was to create a simple mobile friendly schedule for students using RMS’s e-learning platform to help them plan their study. It would take various inputs on how long they can study, and when they plan to take their exams, then roughly plan out what they should study and when. It was decided to make this in Ember.js as we wanted to try using different technologies for development.",
            },
            {
                title: "Design & Development",
                body: "The design of the app was to be very simple, so it was created using Material. The backend was wrote in C# ASP.net, with the front end being an Ember.js app. The backend integrated into various of our in-house platforms to pull user details together when creating students plans.",
            },
            {
                title: "Notes",
                body: "This tool is only available to people who have purchased certain courses, you will not be able to demo this app working at the link above.",
            },
        ],
        images: {
            desktop: RMSStudyScheduleDesktop,
            mobile: RMSStudyScheduleMobile,
            thumbnail: RMSStudyScheduleThumbnail,
        },
    },
    {
        id: "rmspublishing",
        label: "RMS Publishing",
        type: "employment",
        url: "https://www.rmspublishing.co.uk/",
        url_active: true,
        tags: ["Bootstrap", "JQuery", "VB.NET"],
        content_blocks: [
            {
                title: "Project Brief",
                body: "RMS Publishing is a small Health & Safety Book Publishing company. The goal of this project was to revitalise their old website and make it mobile friendly, as well as allowing for their whole catalogue of products.",
            },
            {
                title: "Design & Development",
                body: "Due to time constraints, we decided to keep the website simple and just create it through static pages rather than a CMS, there was also a lack of knowledge at the time of CMS products that could be used so to save time I created it as a static ASP.NET site. The design for the site used Bootstrap, which helped a lot with making it mobile friendly.",
            },
        ],
        images: {
            desktop: RMSPublishingDesktop,
            thumbnail: RMSPublishingThumbnail,
        },
    },
    {
        id: "ias",
        label: "iAS",
        type: "employment",
        url: "https://www.internationalaccreditationsociety.co.uk/",
        url_active: true,
        tags: ["Bootstrap", "JQuery", "VB.NET"],
        content_blocks: [
            {
                title: "Project Brief",
                body: "iAS is a non-profit assessment and awarding body. The project here was to create a small new website to replace their old one, to allow people to find out information about the company. The site was only to be simple and to be mobile compatible where possible.",
            },
            {
                title: "Design & Development",
                body: "The design for this website was a straight forward one, making use of various branding colours, with mainly text based pages. Bootstrap was used as the base, with various changes made throughout. The site was kept as simple as possible to keep it low maintenance, and with the very limited content on the site, it was mostly just created as static pages.",
            },
        ],
        images: {
            desktop: iASDesktop,
            mobile: iASMobile,
            thumbnail: iASThumbnail,
        },
    },
    {
        id: "ottis",
        label: "Ottis App",
        type: "employment",
        url: "https://ottisapp.com",
        url_active: true,
        tags: ["Bootstrap", "JQuery", "MSSQL", "VB.NET"],
        content_blocks: [
            {
                title: "Project Brief",
                body: "Ottis App was to be used as RMS’s new LMS. It was created to supersede their previous platform, taking into account more modern practices, such as being mobile first, and making use of HTML5 techniques, such as HTML5 videos rather than Flash based videos. This was my first commercially facing system, created completely by myself while working for RMS.",
            },
            {
                title: "Design & Development",
                body: "The design of Ottis App was to be kept simple, but ensuring it was mobile compatible. As such I built it around the Bootstrap framework as it heavily is based around the mobile first design philosophy. The site was developed using ASP.NET/VB.NET using both WebServices and Webforms to power the site.",
            },
            {
                title: "Notes",
                body: "This tool is only available to people who have purchased certain courses, you will not be able to demo this app working at the link above.",
            },
        ],
        images: {
            desktop: OttisAppDesktop,
            mobile: OttisAppMobile,
            thumbnail: OttisAppThumbnail,
        },
    },
];
