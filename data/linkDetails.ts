//  _____   __         __         _____         __          __ __
// |     |_|__|.-----.|  |--.    |     \.-----.|  |_.---.-.|__|  |.-----.
// |       |  ||     ||    <     |  --  |  -__||   _|  _  ||  |  ||__ --|
// |_______|__||__|__||__|__|    |_____/|_____||____|___._||__|__||_____|
/* ------------------------------------------------- */
//  this is the data source from which we will populate the cards on the page with links.
/* ------------------------------------------------- */
/* This is the interface definition for the cards that will serve as the links themselves
 */

/*
Data Format
href: the page's url including https:// 
title: Name displayed to users
description: if necessary descriptive text

*/

export interface CardProps {
  href: string;
  title: string;
  description: string;
}

export const CardData: Array<CardProps> = [
  {
    href: "https://thomasleonhighbaugh.me",
    title: "Portfolio",
    description:
      "My distinctive web front-end with a particularly tasteful svg animation on the homepage.",
  },
  {
    href: "https://resume-thomas-leon-highbaugh.vercel.app/",
    title: "Resume",
    description: "Since I wrote my resume in HTML, I hosted it too!",
  },
  {
    href: "https://www.linkedin.com/in/thomas-leon-highbaugh",
    title: "Linkedin",
    description: "Let's connect on LinkedIn",
  },
  {
    href: "https://www.instagram.com/thomashighbaugh/",
    title: "Instagram",
    description:
      "Where I post my art and IFTTT + Instapy take care of the rest.",
  },
  {
    href: "https://github.com/Thomashighbaugh",
    title: "Github",
    description:
      "My main Github presence, the corner of the web I frequent the most.",
  },
  {
    href: "https://gitlab.com/Thomashighbaugh",
    title: "Gitlab",
    description: "Automatically backed up from Github",
  },
  {
    href: "https://twitter.com/thomashighbaugh",
    title: "Twitter",
    description:
      "Mostly handled by IFTTT, which I use to broadcast my activity",
  },
  {
    href: "https://web.whatsapp.com/",
    title: "Discord",
    description: "",
  },
  {
    href: "https://dev.to/thomashighbaugh",
    title: "dev.to",
    description: "",
  },

  // {
  //   href: "https://medium.com/",
  //   title: "Medium",
  //   description: "Read some of my fantastic articles here",
  // },
];
