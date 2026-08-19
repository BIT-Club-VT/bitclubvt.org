import type { Metadata } from "next";
import BoardInfo, { type BoardGroup } from "./components/BoardInfo";
import Footer from "../components/Footer";
import ImageFrame from "./components/ImageFrame";
import ImageHeader from "./components/ImageHeader";
import Navbar from "../components/Navbar";
import currentBoardPhoto from "../../../public/exec_board_photos/group_photos/current_board_photo/BITBoard2025_2026_alt.jpg";
import boardPhoto2024 from "../../../public/exec_board_photos/group_photos/previous_board_photos/BITBoard2024_2025.jpg";
import boardPhoto2023 from "../../../public/exec_board_photos/group_photos/previous_board_photos/BITBoard2023_2024_optimized.jpg";
import asmaAdibaPhoto from "../../../public/exec_board_photos/headshots/asma_adiba.jpg";
import bradyCookPhoto from "../../../public/exec_board_photos/headshots/brady_cook.jpg";
import cheikhSambPhoto from "../../../public/exec_board_photos/headshots/cheikh_samb.jpg";
import christopherZhongPhoto from "../../../public/exec_board_photos/headshots/christopher_zhong.jpg";
import emanTukuPhoto from "../../../public/exec_board_photos/headshots/eman_tuku.jpg";
import madisonBuiPhoto from "../../../public/exec_board_photos/headshots/madison_bui.jpg";
import meghanaGundaPhoto from "../../../public/exec_board_photos/headshots/meghana_gunda.jpg";
import narenKotaPhoto from "../../../public/exec_board_photos/headshots/naren_kota.jpg";
import nihalPrasadPhoto from "../../../public/exec_board_photos/headshots/nihal_prasad.jpg";
import romanWillisPhoto from "../../../public/exec_board_photos/headshots/roman_willis.jpg";
import sashaZeltserPhoto from "../../../public/exec_board_photos/headshots/sasha_zeltser.jpg";
import tanviAggarwalPhoto from "../../../public/exec_board_photos/headshots/tanvi_aggarwal.jpg";
import tvesaSoniPhoto from "../../../public/exec_board_photos/headshots/tvesa_soni.jpg";

export const metadata: Metadata = {
  title: "Exec Board",
};

const presidentGroups: BoardGroup[] = [
  {
    title: "Presidents",
    members: [
      {
        name: "Madison Bui",
        position: "President",
        degree: "Senior | BIT-CMA",
        imageSrc: madisonBuiPhoto,
        bio: (
          <>
            <b>Fun Fact:</b> I love to cook for my friends and family and lift
            heavy at the gym! <br />
            <b>Favorite Club Memory:</b> Our Hot Chocolate Social!
          </>
        ),
        linkedin: "https://www.linkedin.com/in/madison-bui-63b5821b9/",
      },
      {
        name: "Christopher Zhong",
        position: "Vice President",
        degree: "Senior | BIT-CMA",
        imageSrc: christopherZhongPhoto,
        bio: (
          <>
            <b>Fun Fact:</b> I did over 1,000 miles of biking over the pandemic!{" "}
            <br />
            <b>Favorite Club Memory:</b> Hiking to cascades freshman year and
            grilling on the waterfall!
          </>
        ),
        linkedin: "https://www.linkedin.com/in/christopheryzhong/",
      },
    ],
  },
];

const committeeGroups: BoardGroup[] = [
  {
    title: "Events Committee",
    members: [
      {
        name: "Sasha Zeltser",
        position: "Events Chair",
        degree: "Junior | BIT-CMA",
        imageSrc: sashaZeltserPhoto,
        bio: (
          <>
            <b>Fun Fact:</b> I can speak Russian! <br />
            <b>Favorite Club Memory:</b> Collaborating with Accenture Financial
            Services!
          </>
        ),
        linkedin: "https://www.linkedin.com/in/sasha-zeltser-b3958528b/",
      },
      {
        name: "Eman Tuku",
        position: "Socials Chair",
        degree: "Senior | BIT-DSS",
        imageSrc: emanTukuPhoto,
        bio: (
          <>
            <b>Fun Fact:</b> I was born in Minnesota! <br />
            <b>Favorite Club Memory:</b> Social events and board bonding!
          </>
        ),
        linkedin: "https://www.linkedin.com/in/eman-tuku/",
      },
      {
        name: "Asma Abida",
        position: "Treasurer & Secretary",
        degree: "Junior | BIT",
        imageSrc: asmaAdibaPhoto,
        bio: (
          <>
            <b>Fun Fact:</b> I can speak 4 languages! <br />
            <b>Favorite Club Memory:</b> The Deloitte Resume Workshop!
          </>
        ),
        linkedin: "https://www.linkedin.com/in/adibaasma/",
      },
    ],
  },
  {
    title: "Marketing Committee",
    members: [
      {
        name: "Roman Willis",
        position: "Director of Marketing",
        degree:
          "Sophomore | BIT-CMA and National Security & Foreign Affairs (Minor)",
        imageSrc: romanWillisPhoto,
        bio: (
          <>
            <b>Fun Fact:</b> I do photography and videography as a hobby & side
            hustle! <br />
            <b>Favorite Club Memory:</b> Grill Cheese Night Fundraiser!
          </>
        ),
        linkedin: "https://www.linkedin.com/in/roman-willis/",
      },
      {
        name: "Naren Kota",
        position: "Director of Communications",
        degree: "Senior | BIT-CMA",
        imageSrc: narenKotaPhoto,
        bio: (
          <>
            <b>Fun Fact:</b> I love pickleball! <br />
            <b>Favorite Club Memory:</b> Being at gobblerfest :)
          </>
        ),
        linkedin: "https://www.linkedin.com/in/naren-kota/",
      },
    ],
  },
];

const supportGroups: BoardGroup[] = [
  {
    title: "Web Design Committee",
    members: [
      {
        name: "Brady Cook",
        position: "Web Design Chair",
        degree: "Sophomore | BIT-CMA",
        imageSrc: bradyCookPhoto,
        bio: (
          <>
            <b>Fun Fact:</b> My 5K PR is a 16:54! <br />
            <b>Favorite Club Memory:</b> Our first grilled cheese night
            fundraiser (we had a really great time)!
          </>
        ),
        linkedin: "https://www.linkedin.com/in/bradypcook/",
      },
    ],
  },
  {
    title: "Advisory Board",
    members: [
      {
        name: "Meghana (Meg) Gunda",
        position: "Senior Advisor",
        degree: "Senior | BIT-CMA",
        imageSrc: meghanaGundaPhoto,
        bio: (
          <>
            <b>Fun Fact:</b> I love going out and trying new things! <br />
            <b>Favorite Club Memory:</b> The hot chocolate and resume review
            event!
          </>
        ),
        linkedin: "https://www.linkedin.com/in/meghana-gunda-040577210/",
      },
      {
        name: "Tanvi Aggarwal",
        position: "Junior Advisor",
        degree: "Sophomore | BIT-DSS",
        imageSrc: tanviAggarwalPhoto,
        bio: (
          <>
            <b>Fun Fact:</b> I have been to 13 countries! <br />
            <b>Favorite Club Memory:</b> My favorite club memory was the first
            executive board meeting I went to. Everyone was extremely welcoming
            and supportive, and I could immediately tell how close the group was
            and how proud they were of each other&apos;s accomplishments.
          </>
        ),
        linkedin: "https://www.linkedin.com/in/tanvi-aggarwal-52a7262b1/",
      },
      {
        name: "Tvesa Soni",
        position: "Junior Advisor",
        degree: "Sophomore | BIT-DSS",
        imageSrc: tvesaSoniPhoto,
        bio: (
          <>
            <b>Fun Fact:</b> I do sports photography! <br />
            <b>Favorite Club Memory:</b> The resume workshop. I got some great
            feedback on my resume!
          </>
        ),
        linkedin: "https://www.linkedin.com/in/tvesasoni/",
      },
      {
        name: "Nihal (Sunny) Prasad",
        position: "Junior Advisor",
        degree: "Sophomore | BIT-CMA & Corporate Financal Management",
        imageSrc: nihalPrasadPhoto,
        bio: (
          <>
            <b>Fun Fact:</b> I write a lot and I will be published in several
            literary magazines later this year (2025). <br />
            <b>Favorite Club Memory:</b> The end-of-year celebration last
            semester.
          </>
        ),
        linkedin: "https://www.linkedin.com/in/nihalprasad/",
      },
      {
        name: "Cheikh Samb",
        position: "Junior Advisor",
        degree: "Junior | BIT",
        imageSrc: cheikhSambPhoto,
        bio: (
          <>
            <b>Fun Fact:</b> I haveve played basketball for over 15 years! <br />
            <b>Favorite Club Memory:</b> Attending GobblerFest 2025 and meeting
            lots of new & returing Hokies!
          </>
        ),
        linkedin: "https://www.linkedin.com/in/cheikhsamb4/",
      },
    ],
  },
];

export default function ExecBoardPage() {
  return (
    <main>
      <Navbar />

      <ImageHeader text="BIT Executive Board 2025-2026" />
      <ImageFrame
        imageSrc={currentBoardPhoto}
        alt="BIT Board 2025-2026"
      />

      <BoardInfo groups={presidentGroups} />
      <BoardInfo groups={committeeGroups} />
      <BoardInfo groups={supportGroups} />

      <ImageHeader text="Previous Executive Boards" />
      <ImageFrame
        imageSrc={boardPhoto2024}
        alt="BIT Board 2024-2025"
        caption="BIT Board 2024-2025"
      />
      <ImageFrame
        imageSrc={boardPhoto2023}
        alt="BIT Board 2023-2024"
        caption="BIT Board 2023-2024"
      />

      <Footer />
    </main>
  );
}
