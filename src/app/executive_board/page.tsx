import type { Metadata } from "next";
import BoardInfo, { type BoardGroup } from "./components/BoardInfo";
import Footer from "../components/Footer";
import ImageFrame from "./components/ImageFrame";
import ImageHeader from "./components/ImageHeader";
import Navbar from "../components/Navbar";
import currentBoardPhoto from "../../../public/exec_board_photos/group_photos/current_board_photo/BITBoard2026_2027.jpg";
import boardPhoto2025 from "../../../public/exec_board_photos/group_photos/previous_board_photos/BITBoard2025_2026_alt.jpg";
import boardPhoto2024 from "../../../public/exec_board_photos/group_photos/previous_board_photos/BITBoard2024_2025.jpg";
import boardPhoto2023 from "../../../public/exec_board_photos/group_photos/previous_board_photos/BITBoard2023_2024_optimized.jpg";
import asmaAdibaPhoto from "../../../public/exec_board_photos/headshots/asma_adiba.jpg";
import bradyCookPhoto from "../../../public/exec_board_photos/headshots/brady_cook.jpg";
import cheikhSambPhoto from "../../../public/exec_board_photos/headshots/cheikh_samb.jpg";
import nihalPrasadPhoto from "../../../public/exec_board_photos/headshots/nihal_prasad.jpg";
import romanWillisPhoto from "../../../public/exec_board_photos/headshots/roman_willis.jpg";
import sashaZeltserPhoto from "../../../public/exec_board_photos/headshots/sasha_zeltser.jpg";
import tanviAggarwalPhoto from "../../../public/exec_board_photos/headshots/tanvi_aggarwal.jpg";
import tvesaSoniPhoto from "../../../public/exec_board_photos/headshots/tvesa_soni.jpg";
import carterHawkinsPhoto from "../../../public/exec_board_photos/headshots/carter_hawkins.jpg";
import bhavyaChebattinaPhoto from "../../../public/exec_board_photos/headshots/bhavya_chebattina.jpg";
import nathanTonPhoto from "../../../public/exec_board_photos/headshots/nathan_ton.jpg";
import amandaKhongPhoto from "../../../public/exec_board_photos/headshots/amanda_khong.jpg";
import shrikhabalajiPhoto from "../../../public/exec_board_photos/headshots/shrikha_balaji.jpg";

export const metadata: Metadata = {
  title: "Exec Board",
};

const adminGroup: BoardGroup[] = [
  {
    title: "Admin",
    members: [
      {
        name: "Roman Willis",
        position: "President",
        degree:
          "Junior | BIT-CMA and National Security & Foreign Affairs (Minor)",
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
        name: "Asma Adiba",
        position: "External Vice President",
        degree: "Senior | BIT",
        imageSrc: asmaAdibaPhoto,
        bio: (
          <>
            <b>Fun Fact:</b> I can speak 4 languages! <br />
            <b>Favorite Club Memory:</b> The Deloitte Resume Workshop!
          </>
        ),
        linkedin: "https://www.linkedin.com/in/adibaasma/",
      },
      {
        name: "Brady Cook",
        position: "Internal Vice President",
        degree: "Junior | BIT-CMA",
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
      {
        name: "Nihal (Sunny) Prasad",
        position: "Treasurer",
        degree: "Junior | FCFA & FCFM",
        imageSrc: nihalPrasadPhoto,
        bio: (
          <>
            <b>Fun Fact:</b> I recently got published by a literary magazine.{" "}
            <br />
            <b>Favorite Club Memory:</b> Collaborating with great professionals
            from companies like CGI, Deloitte, and EY.
          </>
        ),
        linkedin: "https://www.linkedin.com/in/nihalprasad/",
      },
      {
        name: "Tanvi Aggarwal",
        position: "Treasurer",
        degree: "Junior | BIT-DSS",
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
    ],
  },
];

const marketingAndEvents: BoardGroup[] = [
  {
    title: "Marketing and Events",
    members: [
      {
        name: "Bhavya Chebattina",
        position: "Director of Marketing",
        degree: "Junior | BIT-DSS",
        imageSrc: bhavyaChebattinaPhoto,
        bio: (
          <>
            <b>Fun Fact:</b> I’ve been playing the violin for 14 years! <br />
            <b>Favorite Club Memory:</b> Meeting everyone at the New Student
            Social!
          </>
        ),
        linkedin: "http://linkedin.com/in/bhavya-chebattina",
      },
      {
        name: "Nathan Ton",
        position: "Director of Communications",
        degree: "Junior | BIT-CMA",
        imageSrc: nathanTonPhoto,
        bio: (
          <>
            <b>Fun Fact:</b> ? <br />
            <b>Favorite Club Memory:</b> ?
          </>
        ),
        linkedin: "https://www.linkedin.com/in/nathanton/",
      },
      {
        name: "Amanda Khong",
        position: "Content Chair",
        degree: "Junior | BIT-DSS",
        imageSrc: amandaKhongPhoto,
        bio: (
          <>
            <b>Fun Fact:</b> ? <br />
            <b>Favorite Club Memory:</b> ?
          </>
        ),
        linkedin: "https://www.linkedin.com/in/amanda-khong-41a684382/",
      },
      {
        name: "Tvesa Soni",
        position: "Social Chair",
        degree: "Junior | BIT-DSS",
        imageSrc: tvesaSoniPhoto,
        bio: (
          <>
            <b>Fun Fact:</b> I jumped off a cliff in Switzerland! <br />
            <b>Favorite Club Memory:</b> I loved our professional development
            activities! Specifically Mocktails and Marketing Yourself, reviewing
            resumes and cute drinks was so fun!!
          </>
        ),
        linkedin: "https://www.linkedin.com/in/tvesasoni/",
      },
      {
        name: "Cheikh Samb",
        position: "Social Chair",
        degree: "Senior | BIT",
        imageSrc: cheikhSambPhoto,
        bio: (
          <>
            <b>Fun Fact:</b> I have played basketball for over 15 years!{" "}
            <br />
            <b>Favorite Club Memory:</b> Attending GobblerFest 2025 and meeting
            lots of new & returning Hokies!
          </>
        ),
        linkedin: "https://www.linkedin.com/in/cheikhsamb4/",
      },
      {
        name: "Carter Hawkins",
        position: "Web Developer",
        degree: "Junior | CS",
        imageSrc: carterHawkinsPhoto,
        bio: (
          <>
            <b>Fun Fact:</b> I like to go hiking! <br />
            <b>Favorite Club Memory:</b> Quesadilla & Grilled Cheese Night
          </>
        ),
        linkedin: "https://www.linkedin.com/in/carterhawkinsvt/",
      },
    ],
  },
];

const advisoryBoard: BoardGroup[] = [
  {
    title: "Advisory Board",
    members: [
      {
        name: "Sasha Zeltser",
        position: "Senior Advisor",
        degree: "Senior | BIT-CMA",
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
        name: "Shrikha Balaji",
        position: "Junior Advisor",
        degree: "BIT - MCA",
        imageSrc: shrikhabalajiPhoto,
        bio: (
          <>
            <b>Fun Fact:</b> ? <br />
            <b>Favorite Club Memory:</b> ?
          </>
        ),
        linkedin: "https://www.linkedin.com/in/shrikhabalaji/",
      },
    ],
  },
];

export default function ExecBoardPage() {
  return (
    <main>
      <Navbar />

      <ImageHeader text="BIT Executive Board 2026-2027" />

      {/* 
      TODO uncomment once we have updated current board photo
      <ImageFrame imageSrc={currentBoardPhoto} alt="BIT Board 2026-2027" /> 
      */}

      <BoardInfo groups={adminGroup} />
      <BoardInfo groups={marketingAndEvents} />
      <BoardInfo groups={advisoryBoard} />

      <ImageHeader text="Previous Executive Boards" />
      <ImageFrame
        imageSrc={boardPhoto2025}
        alt="BIT Board 2025-2026"
        caption="BIT Board 2025-2026"
      />
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
