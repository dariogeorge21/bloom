'use client'

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { Container } from "@/components/ui/container"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { useLanguage } from "@/contexts/LanguageContext"
import { getTranslation } from "@/lib/translations"

// Sample gallery items - Replace these with your Cloudinary URLs
const imageGalleryItems = [
  {
    id: 1,
    title: "Worship Session",
    description: "Blooming Roses 2025",
    src: "https://res.cloudinary.com/dobqxxtml/image/upload/v1744692497/BLOOMING_ROSES_25_A_Celebration_of_Teens_Hey_Teens_Get_ready_for_Blooming_Roses_25_an_exciting_and_life-changing_event_just_for_YOU_Join_us_from_April_24th_to_April_27th_at_Tabore_Kodumpidi_Pala_for_four_days_fil_flyftm.webp",
    alt: "Worship session with candles lit",
  },
  // Add more items with Cloudinary URLs
  {
    id: 2,
    title: "Community Gathering",
    description: "Group photo of Blooming Roses 2024",
    src: "https://res.cloudinary.com/dobqxxtml/image/upload/v1744718801/previous_blooming_nkakyy.jpg", // Example - replace with your URL
    alt: "Group of young people in a circle",
  },
  {
    id: 3,
    title: "Prayer Night",
    description: "Blooming Roses 2022",
    src: "https://res.cloudinary.com/dobqxxtml/image/upload/v1744733369/IMG_9357_gbvpnk.jpg", // Example - replace with your URL
    alt: "Prayer session with candles lit",
  },
  {
    id: 4,
    title: "Blooming Roses",
    description: "Highlights of Blooming Roses 2023",
    src: "https://res.cloudinary.com/dobqxxtml/image/upload/v1744734424/Blooming_Roses_23_%EF%B8%8FVolunteersincomplete_frame_...._teens_teensministry_jesusyouthpala_jesusyouth_pala_vgzamp.jpg",
    alt: "Volunteers group photo at Blooming Roses",
  },
  {
    id: 5,
    title: "Blooming Roses",
    description: "Highlights of Blooming Roses 2023",
    src: "https://res.cloudinary.com/dobqxxtml/image/upload/v1744734420/Blooming_Roses_23_%EF%B8%8FVolunteersincomplete_frame_...._teens_teensministry_jesusyouthpala_jesusyouth_pala_3_d8luqx.jpg",
    alt: "Group activities during Blooming Roses event",
  },
  {
    id: 6,
    title: "Blooming Roses",
    description: "Highlights of Blooming Roses 2022",
    src: "https://res.cloudinary.com/dobqxxtml/image/upload/v1744734419/Blooming_Roses_23_%EF%B8%8FVolunteersincomplete_frame_...._teens_teensministry_jesusyouthpala_jesusyouth_pala_4_nmgvtt.jpg",
    alt: "Participants engaged in spiritual activities",
  },
  {
    id: 7,
    title: "Blooming Roses",
    description: "Highlights of Blooming Roses 2023",
    src: "https://res.cloudinary.com/dobqxxtml/image/upload/v1744734422/Blooming_Roses_23_%EF%B8%8FVolunteersincomplete_frame_...._teens_teensministry_jesusyouthpala_jesusyouth_pala_1_rvlygu.jpg",
    alt: "Youth gathering at Blooming Roses event",
  },
  {
    id: 8,
    title: "Blooming Roses",
    description: "Highlights of Blooming Roses 2023",
    src: "https://res.cloudinary.com/dobqxxtml/image/upload/v1744734421/Blooming_Roses_23_%EF%B8%8FVolunteersincomplete_frame_...._teens_teensministry_jesusyouthpala_jesusyouth_pala_2_abzqgg.jpg",
    alt: "Teens participating in Blooming Roses activities",
  },
  {
    id: 9,
    title: "Blooming Roses",
    description: "Highlights of Blooming Roses 2023",
    src: "https://res.cloudinary.com/dobqxxtml/image/upload/v1744734412/Blooming_Roses_23_%EF%B8%8F...._teens_teensministry_jesusyouthpala_jesusyouth_pala_3_vnovym.jpg",
    alt: "Spiritual session at Blooming Roses",
  },
  {
    id: 10,
    title: "Blooming Roses",
    description: "Highlights of Blooming Roses 2024",
    src: "https://res.cloudinary.com/dobqxxtml/image/upload/v1744734413/Blooming_Roses_23_%EF%B8%8F...._teens_teensministry_jesusyouthpala_jesusyouth_pala_2_uqszyv.jpg",
    alt: "Group prayer during Blooming Roses",
  },
  {
    id: 11,
    title: "Blooming Roses",
    description: "Highlights of Blooming Roses 2024",
    src: "https://res.cloudinary.com/dobqxxtml/image/upload/v1744734414/Blooming_Roses_23_%EF%B8%8F...._teens_teensministry_jesusyouthpala_jesusyouth_pala_1_swoewo.jpg",
    alt: "Teens engaged in worship at Blooming Roses",
  },
  {
    id: 12,
    title: "Blooming Roses",
    description: "Highlights of Blooming Roses 2023",
    src: "https://res.cloudinary.com/dobqxxtml/image/upload/v1744734416/Blooming_Roses_23_%EF%B8%8FVolunteersincomplete_frame_...._teens_teensministry_jesusyouthpala_jesusyouth_pala_6_cwipec.jpg",
    alt: "Volunteers and participants at Blooming Roses",
  },
  {
    id: 13,
    title: "Blooming Roses",
    description: "Highlights of Blooming Roses 2024",
    src: "https://res.cloudinary.com/dobqxxtml/image/upload/v1744734418/Blooming_Roses_23_%EF%B8%8FVolunteersincomplete_frame_...._teens_teensministry_jesusyouthpala_jesusyouth_pala_5_xrvrga.jpg",
    alt: "Group activities at Blooming Roses retreat",
  },
  {
    id: 14,
    title: "Blooming Roses",
    description: "Highlights of Blooming Roses 2023",
    src: "https://res.cloudinary.com/dobqxxtml/image/upload/v1744734415/Blooming_Roses_23_%EF%B8%8F...._teens_teensministry_jesusyouthpala_jesusyouth_pala_fka3gk.jpg",
    alt: "Teens ministry gathering at Blooming Roses",
  },
  {
    id: 15,
    title: "Blooming Roses",
    description: "Highlights of Blooming Roses 2022",
    src: "https://res.cloudinary.com/dobqxxtml/image/upload/v1744734411/Blooming_Roses_23_%EF%B8%8F...._teens_teensministry_jesusyouthpala_jesusyouth_pala_4_re6rri.jpg",
    alt: "Youth prayer session at Blooming Roses",
  },
  {
    id: 16,
    title: "Blooming Roses",
    description: "Highlights of Blooming Roses 2023",
    src: "https://res.cloudinary.com/dobqxxtml/image/upload/v1744734410/Blooming_Roses_23_%EF%B8%8F...._teens_teensministry_jesusyouthpala_jesusyouth_pala_6_fyxpmh.jpg",
    alt: "Spiritual formation activities at Blooming Roses",
  },
  {
    id: 17,
    title: "Blooming Roses",
    description: "Highlights of Blooming Roses 2024",
    src: "https://res.cloudinary.com/dobqxxtml/image/upload/v1744734409/Blooming_Roses_23_%EF%B8%8F...._teens_teensministry_jesusyouthpala_jesusyouth_pala_7_ahqayd.jpg",
    alt: "Teens participating in group activities",
  },
  {
    id: 18,
    title: "Blooming Roses",
    description: "Highlights of Blooming Roses 2023",
    src: "https://res.cloudinary.com/dobqxxtml/image/upload/v1744734408/Blooming_Roses_23_%EF%B8%8F...._teens_teensministry_jesusyouthpala_jesusyouth_pala_8_xawm0b.jpg",
    alt: "Youth ministry event at Blooming Roses",
  },
  {
    id: 19,
    title: "Blooming Roses",
    description: "Highlights of Blooming Roses 2024",
    src: "https://res.cloudinary.com/dobqxxtml/image/upload/v1744734407/Blooming_Roses_23_%EF%B8%8F...._teens_teensministry_jesusyouthpala_jesusyouth_pala_9_z8hbhq.jpg",
    alt: "Group photo of teens at Blooming Roses",
  },
  {
    id: 20,
    title: "Blooming Roses",
    description: "Highlights of Blooming Roses 2023",
    src: "https://res.cloudinary.com/dobqxxtml/image/upload/v1744734405/Blooming_Roses_23_%EF%B8%8F...._teens_teensministry_jesusyouthpala_jesusyouth_pala_10_bj6mkw.jpg",
    alt: "Spiritual retreat activities at Blooming Roses",
  },
  {
    id: 21,
    title: "Blooming Roses",
    description: "Highlights of Blooming Roses 2022",
    src: "https://res.cloudinary.com/dobqxxtml/image/upload/v1744734403/Blooming_Roses_23_%EF%B8%8F...._teens_teensministry_jesusyouthpala_jesusyouth_pala_12_tbeuet.jpg",
    alt: "Teens engaged in faith formation",
  },
  {
    id: 22,
    title: "Blooming Roses",
    description: "Highlights of Blooming Roses 2023",
    src: "https://res.cloudinary.com/dobqxxtml/image/upload/v1744734401/Blooming_Roses_23_%EF%B8%8F...._teens_teensministry_jesusyouthpala_jesusyouth_pala_14_q7tjlr.jpg",
    alt: "Youth gathering at Blooming Roses event",
  },
  {
    id: 23,
    title: "Blooming Roses",
    description: "Highlights of Blooming Roses 2023",
    src: "https://res.cloudinary.com/dobqxxtml/image/upload/v1744734397/Blooming_Roses_23_%EF%B8%8F...._teens_teensministry_jesusyouthpala_jesusyouth_pala_16_dt65hq.jpg",
    alt: "Teens ministry activities at Blooming Roses",
  },
  {
    id: 24,
    title: "Blooming Roses",
    description: "Highlights of Blooming Roses 2024",
    src: "https://res.cloudinary.com/dobqxxtml/image/upload/v1744734398/Blooming_Roses_23_%EF%B8%8F...._teens_teensministry_jesusyouthpala_jesusyouth_pala_15_tav9xp.jpg",
    alt: "Group prayer session at Blooming Roses",
  },
  {
    id: 25,
    title: "Blooming Roses",
    description: "Highlights of Blooming Roses 2023",
    src: "https://res.cloudinary.com/dobqxxtml/image/upload/v1744734404/Blooming_Roses_23_%EF%B8%8F...._teens_teensministry_jesusyouthpala_jesusyouth_pala_11_ck7noz.jpg",
    alt: "Teens participating in spiritual activities",
  },
  {
    id: 26,
    title: "Blooming Roses",
    description: "Highlights of Blooming Roses 2023",
    src: "https://res.cloudinary.com/dobqxxtml/image/upload/v1744734402/Blooming_Roses_23_%EF%B8%8F...._teens_teensministry_jesusyouthpala_jesusyouth_pala_13_zewccl.jpg",
    alt: "Youth ministry event at Blooming Roses",
  },
  {
    id: 27,
    title: "Blooming Roses",
    description: "Highlights of Blooming Roses 2023",
    src: "https://res.cloudinary.com/dobqxxtml/image/upload/v1744734397/Blooming_Roses_23_%EF%B8%8F_...._palkbz.jpg",
    alt: "Group activities at Blooming Roses retreat",
  },
  {
    id: 28,
    title: "Blooming Roses",
    description: "Highlights of Blooming Roses 2023",
    src: "https://res.cloudinary.com/dobqxxtml/image/upload/v1744734393/Blooming_Roses_23_%EF%B8%8F...._teens_teensministry_jesusyouthpala_jesusyouth_pala_19_enmpqs.jpg",
    alt: "Teens engaged in spiritual formation",
  },
  {
    id: 29,
    title: "Blooming Roses",
    description: "Highlights of Blooming Roses 2023",
    src: "https://res.cloudinary.com/dobqxxtml/image/upload/v1744734394/Blooming_Roses_23_%EF%B8%8F_...._1_dyzxc7.jpg",
    alt: "Youth prayer gathering at Blooming Roses",
  },
  {
    id: 30,
    title: "Blooming Roses",
    description: "Highlights of Blooming Roses 2023",
    src: "https://res.cloudinary.com/dobqxxtml/image/upload/v1744734394/Blooming_Roses_23_%EF%B8%8F...._teens_teensministry_jesusyouthpala_jesusyouth_pala_18_vawoti.jpg",
    alt: "Teens ministry activities at Blooming Roses",
  },
  {
    id: 31,
    title: "Blooming Roses",
    description: "Highlights of Blooming Roses 2023",
    src: "https://res.cloudinary.com/dobqxxtml/image/upload/v1744734392/Blooming_Roses_23_%EF%B8%8F...._teens_teensministry_jesusyouthpala_jesusyouth_pala_21_aq0cyd.jpg",
    alt: "Group photo of participants at Blooming Roses",
  },
  {
    id: 32,
    title: "Blooming Roses",
    description: "Highlights of Blooming Roses 2023",
    src: "https://res.cloudinary.com/dobqxxtml/image/upload/v1744734393/Blooming_Roses_23_%EF%B8%8F...._teens_teensministry_jesusyouthpala_jesusyouth_pala_17_licey5.jpg",
    alt: "Spiritual activities at Blooming Roses retreat",
  },
  {
    id: 33,
    title: "Blooming Roses",
    description: "Highlights of Blooming Roses 2023",
    src: "https://res.cloudinary.com/dobqxxtml/image/upload/v1744734392/Blooming_Roses_23_%EF%B8%8F...._teens_teensministry_jesusyouthpala_jesusyouth_pala_20_quwxrr.jpg",
    alt: "Teens engaged in group activities",
  },
  {
    id: 34,
    title: "Blooming Roses",
    description: "Highlights of Blooming Roses 2023",
    src: "https://res.cloudinary.com/dobqxxtml/image/upload/v1744733364/IMG_9387_zelgf4.jpg",
    alt: "Youth gathering at Blooming Roses event",
  },
  {
    id: 35,
    title: "Blooming Roses",
    description: "Highlights of Blooming Roses 2023",
    src: "https://res.cloudinary.com/dobqxxtml/image/upload/v1744733350/IMG_9386_l8foyx.jpg",
    alt: "Group prayer session at Blooming Roses",
  },
  {
    id: 36,
    title: "Blooming Roses",
    description: "Highlights of Blooming Roses 2023",
    src: "https://res.cloudinary.com/dobqxxtml/image/upload/v1744733279/Blooming_Roses_23_%EF%B8%8FInauguration...._teens_teensministry_jesusyouthpala_jesusyouth_pala_rhkoof.jpg",
    alt: "Inauguration ceremony at Blooming Roses",
  },
  {
    id: 37,
    title: "Blooming Roses",
    description: "Highlights of Blooming Roses 2023",
    src: "https://res.cloudinary.com/dobqxxtml/image/upload/v1744718801/previous_blooming_nkakyy.jpg",
    alt: "Group photo of participants at Blooming Roses",
  }
]

// Sample video gallery items - only needs videoUrl and description
const videoGalleryItems = [
  {
    id: 1,
    title: "Blooming Roses 2022",
    description: "Beautiful moments from the Blooming Roses 2022",
    videoUrl: "https://res.cloudinary.com/dobqxxtml/video/upload/v1744695447/bloom_2k22_jgdp3j.mp4",
    thumbnailUrl: "https://res.cloudinary.com/dobqxxtml/image/upload/c_fill,h_360,q_80,w_640/v1744695447/bloom_2k22_jgdp3j.jpg",
    category: "worship",
  },
  // Add more items with Cloudinary URLs
  {
    id: 2,
    title: "Testimonies of Faith",
    description: "Prayer and worship session from the 2022 Blooming Roses",
    videoUrl: "https://res.cloudinary.com/dobqxxtml/video/upload/v1744695425/blooming_22_dqxhka.mp4",
    thumbnailUrl: "https://res.cloudinary.com/dobqxxtml/image/upload/c_fill,h_360,q_80,w_640/v1744695425/blooming_22_dqxhka.jpg",
    category: "testimonies",
  },
  {
    id: 3,
    title: "Event Recap",
    description: "Highlights from the 2023 Blooming Roses",
    videoUrl: "https://res.cloudinary.com/dobqxxtml/video/upload/v1744695376/1st_day_highlights_-_23bloom_z06cp2.mp4",
    thumbnailUrl: "https://res.cloudinary.com/dobqxxtml/image/upload/c_fill,h_360,q_80,w_640/v1744695376/1st_day_highlights_-_23bloom_z06cp2.jpg",
    category: "event",
  },
  {
    id: 4,
    title: "Prayer Night",
    description: "Shots of the 2024 Blooming Roses",
    videoUrl: "https://res.cloudinary.com/dobqxxtml/video/upload/v1744695352/1st_day_highlights_-_24bloom_ioyeij.mp4",
    thumbnailUrl: "https://res.cloudinary.com/dobqxxtml/image/upload/c_fill,h_360,q_80,w_640/v1744695352/1st_day_highlights_-_24bloom_ioyeij.jpg",
    category: "prayer",
  },
  {
    id: 5,
    title: "Testimonies of Faith",
    description: "Highlights from the 2023 Blooming Roses",
    videoUrl: "https://res.cloudinary.com/dobqxxtml/video/upload/v1744695333/0th_day_highlights_-_23bloom_dwkbpz.mp4",
    thumbnailUrl: "https://res.cloudinary.com/dobqxxtml/image/upload/c_fill,h_360,q_80,w_640/v1744695333/0th_day_highlights_-_23bloom_dwkbpz.jpg",
    category: "testimonies",
  },
  {
    id: 6,
    title: "Testimonies of Faith",
    description: "Highlights from the 2024 Blooming Roses",
    videoUrl: "https://res.cloudinary.com/dobqxxtml/video/upload/v1744695334/2nd_day_highlights_-_24bloom_h4zswd.mp4",
    thumbnailUrl: "https://res.cloudinary.com/dobqxxtml/image/upload/c_fill,h_360,q_80,w_640/v1744695334/2nd_day_highlights_-_24bloom_h4zswd.jpg",
    category: "testimonies",
  },
  {
    id: 7,
    title: "Testimonies of Faith",
    description: "Promo video for the 2022 Blooming Roses",
    videoUrl: "https://res.cloudinary.com/dobqxxtml/video/upload/v1744695438/bloom_22_qsgt2p.mp4",
    thumbnailUrl: "https://res.cloudinary.com/dobqxxtml/image/upload/c_fill,h_360,q_80,w_640/v1744695438/bloom_22_qsgt2p.jpg",
    category: "testimonies",
  },
  {
    id: 8,
    title: "Testimonies of Faith",
    description: "Summation of the 2023 Blooming Roses",
    videoUrl: "https://res.cloudinary.com/dobqxxtml/video/upload/v1744695415/23_bloom_summation_uvlawz.mp4",
    thumbnailUrl: "https://res.cloudinary.com/dobqxxtml/image/upload/c_fill,h_360,q_80,w_640/v1744695415/23_bloom_summation_uvlawz.jpg",
    category: "testimonies",
  },
  {
    id: 9,
    title: "Testimonies of Faith",
    description: "Highlights from the 2024 Blooming Roses",
    videoUrl: "https://res.cloudinary.com/dobqxxtml/video/upload/v1744695352/0th_day_highlights_-_24bloom_yfmjpi.mp4",
    thumbnailUrl: "https://res.cloudinary.com/dobqxxtml/image/upload/c_fill,h_360,q_80,w_640/v1744695352/0th_day_highlights_-_24bloom_yfmjpi.jpg",
    category: "testimonies",
  },
  {
    id: 10,
    title: "Testimonies of Faith",
    description: "Promo video for the 2024 Blooming Roses",
    videoUrl: "https://res.cloudinary.com/dobqxxtml/video/upload/v1744695409/24_bloom_promo_qcecfb.mp4",
    thumbnailUrl: "https://res.cloudinary.com/dobqxxtml/image/upload/c_fill,h_360,q_80,w_640/v1744695409/24_bloom_promo_qcecfb.jpg",
    category: "testimonies",
  },
  {
    id: 11,
    title: "Testimonies of Faith",
    description: "Highlights from the 2023 Blooming Roses",
    videoUrl: "https://res.cloudinary.com/dobqxxtml/video/upload/v1744695345/blloom_23_qesx6y.mp4",
    thumbnailUrl: "https://res.cloudinary.com/dobqxxtml/image/upload/c_fill,h_360,q_80,w_640/v1744695345/blloom_23_qesx6y.jpg",
    category: "testimonies",
  },
  {
    id: 12,
    title: "Testimonies of Faith",
    description: "Promo video for the 2024 Blooming Roses",
    videoUrl: "https://res.cloudinary.com/dobqxxtml/video/upload/v1744695372/bloom_24_promo_onxbtt.mp4",
    thumbnailUrl: "https://res.cloudinary.com/dobqxxtml/image/upload/c_fill,h_360,q_80,w_640/v1744695372/bloom_24_promo_onxbtt.jpg",
    category: "testimonies",
  },
  {
    id: 13,
    title: "Testimonies of Faith",
    description: "Promo video for the 2025 Blooming Roses",
    videoUrl: "https://res.cloudinary.com/dobqxxtml/video/upload/v1744700110/Blooming_Roses_25_is_here....But_spots_are_disappearing_FAST_LAST_CHANCE_ALERT_REGISTER_NOW_BEFORE_IT_S_TOO_LATE_CLICK_HERE_TO_SECURE_YOUR_SPOT_https---bit.ly-blooming25Registration_Seriously_d_ufuckp.mp4",
    thumbnailUrl: "https://res.cloudinary.com/dobqxxtml/image/upload/c_fill,h_360,q_80,w_640/v1744695372/bloom_24_promo_onxbtt.jpg",
    category: "testimonies",
  },
  {
    id: 14,
    title: "Testimonies of Faith",
    description: "Promo video for the 2025 Blooming Roses",
    videoUrl: "https://res.cloudinary.com/dobqxxtml/video/upload/v1744700107/BLOOMING_ROSES_25_A_Celebration_of_Teens_Tabore_Kodumpidi_Pala_Registration_Fee-_800_For_-_8_to_12_ClassesScan_the_QR_code_and_register_now_Or_use_this_Link_to_registerhttps---bit.ly-blooming_zxtbvd.mp4",
    thumbnailUrl: "https://res.cloudinary.com/dobqxxtml/image/upload/c_fill,h_360,q_80,w_640/v1744695372/bloom_24_promo_onxbtt.jpg",
    category: "testimonies",
  },
  {
    id: 15,
    title: "Testimonies of Faith",
    description: "Promo video for the 2025 Blooming Roses",
    videoUrl: "https://res.cloudinary.com/dobqxxtml/video/upload/v1744700102/1%E2%83%A35%E2%83%A3_days_to_go..._BLOOMING_ROSES_25_A_Celebration_of_Teens_Tabore_Prarthanalayam_Kodumpidi_Pala_For_-_8_to_12_ClassesScan_the_QR_code_and_register_now_Or_use_this_Link_to_registerhttps---bit._pd3gl6.mp4",
    thumbnailUrl: "https://res.cloudinary.com/dobqxxtml/image/upload/c_fill,h_360,q_80,w_640/v1744695372/bloom_24_promo_onxbtt.jpg",
    category: "testimonies",
  },
  {
    id: 16,
    title: "Testimonies of Faith",
    description: "Promo video for the 2025 Blooming Roses",
    videoUrl: "https://res.cloudinary.com/dobqxxtml/video/upload/v1744700090/1%E2%83%A38%E2%83%A3_days_to_go..._BLOOMING_ROSES_25_A_Celebration_of_Teens_Tabore_Prarthanalayam_Kodumpidi_Pala_For-_8_to_12_ClassesScan_the_QR_code_and_register_now_Or_use_this_Link_to_registerhttps---bit.ly-bloom_jus0uw.mp4",
    thumbnailUrl: "https://res.cloudinary.com/dobqxxtml/image/upload/c_fill,h_360,q_80,w_640/v1744695372/bloom_24_promo_onxbtt.jpg",
    category: "testimonies",
  }
]

export default function GalleryPage() {
  const { language } = useLanguage();
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null)
  const [selectedVideoIndex, setSelectedVideoIndex] = useState<number | null>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [activeTab, setActiveTab] = useState('photos')

  // Check for tab query parameter on page load
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const tabParam = urlParams.get('tab');

    if (tabParam === 'videos' || tabParam === 'photos') {
      setActiveTab(tabParam);
      // Update the URL without refreshing the page
      const newUrl = new URL(window.location.href);
      newUrl.searchParams.set('tab', tabParam);
      window.history.replaceState({}, '', newUrl);

      // If videos tab is selected, scroll to the videos section
      if (tabParam === 'videos') {
        setTimeout(() => {
          const videosElement = document.getElementById('videos');
          if (videosElement) {
            videosElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 100); // Small delay to ensure the tab has changed
      }
    }
  }, []);

  const navigateImages = useCallback((direction: 'prev' | 'next') => {
    if (selectedImageIndex === null) return

    const newIndex = direction === 'prev'
      ? (selectedImageIndex - 1 + imageGalleryItems.length) % imageGalleryItems.length
      : (selectedImageIndex + 1) % imageGalleryItems.length

    setSelectedImageIndex(newIndex)
  }, [selectedImageIndex])

  const navigateVideos = useCallback((direction: 'prev' | 'next') => {
    if (selectedVideoIndex === null) return

    const newIndex = direction === 'prev'
      ? (selectedVideoIndex - 1 + videoGalleryItems.length) % videoGalleryItems.length
      : (selectedVideoIndex + 1) % videoGalleryItems.length

    setSelectedVideoIndex(newIndex)
  }, [selectedVideoIndex])

  const openImageDialog = (index: number) => {
    setSelectedImageIndex(index)
    setIsDialogOpen(true)
  }

  const openVideoDialog = (index: number) => {
    setSelectedVideoIndex(index)
    setIsDialogOpen(true)
  }

  const handleDialogClose = () => {
    setIsDialogOpen(false)
    setSelectedImageIndex(null)
    setSelectedVideoIndex(null)
  }

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isDialogOpen) return

      if (activeTab === 'photos' && selectedImageIndex !== null) {
        if (e.key === 'ArrowLeft') {
          navigateImages('prev')
        } else if (e.key === 'ArrowRight') {
          navigateImages('next')
        } else if (e.key === 'Escape') {
          setIsDialogOpen(false)
        }
      } else if (activeTab === 'videos' && selectedVideoIndex !== null) {
        if (e.key === 'ArrowLeft') {
          navigateVideos('prev')
        } else if (e.key === 'ArrowRight') {
          navigateVideos('next')
        } else if (e.key === 'Escape') {
          setIsDialogOpen(false)
        }
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isDialogOpen, selectedImageIndex, selectedVideoIndex, activeTab, navigateImages, navigateVideos])

  return (
    <div className="relative">
      {/* Background with soft gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-100 z-[-1]" />

      <div className="relative py-12 md:py-16">
        <Container>
          {/* Page Header */}
          <div className="mb-12 text-center">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4 animate-fade-in">
              <span className="text-blue-800">{getTranslation('gallery', 'title', language)}</span>
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-gray-600 animate-slide-up">
              {getTranslation('gallery', 'subtitle', language)}
            </p>
          </div>

          {/* Tabs */}
          <div className="mb-8 flex justify-center border-b border-gray-200">
            <button
              onClick={() => setActiveTab('photos')}
              className={`px-6 py-3 text-sm font-medium transition-colors border-b-2 ${
                activeTab === 'photos'
                  ? 'border-blue-800 text-blue-800'
                  : 'border-transparent text-gray-600 hover:text-gray-900 hover:border-gray-300'
              }`}
            >
              {getTranslation('gallery', 'photos', language)}
            </button>
            <button
              onClick={() => setActiveTab('videos')}
              className={`px-6 py-3 text-sm font-medium transition-colors border-b-2 ${
                activeTab === 'videos'
                  ? 'border-blue-800 text-blue-800'
                  : 'border-transparent text-gray-600 hover:text-gray-900 hover:border-gray-300'
              }`}
              id="videos-tab"
            >
              {getTranslation('gallery', 'videos', language)}
            </button>
          </div>

          {/* Previous Blooming Roses heading - now moved above the videos grid */}
          {activeTab === 'videos' && (
            <div className="mb-8 text-center" id="videos">
              <h2 className="text-2xl font-bold text-blue-800 mb-4">{language === 'en' ? 'Previous Blooming Roses' : 'മുൻ ബ്ലൂമിംഗ് റോസസ്'}</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                {language === 'en' ? 'Click & watch highlights from our past events and relive the beautiful moments' : 'ഞങ്ങളുടെ മുൻ ഇവന്റുകളിൽ നിന്നുള്ള ഹൈലൈറ്റുകൾ ക്ലിക്ക് ചെയ്ത് കാണുക, മനോഹരമായ നിമിഷങ്ങൾ വീണ്ടും അനുഭവിക്കുക'}
              </p>
            </div>
          )}

          {/* Photos Grid */}
          {activeTab === 'photos' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {imageGalleryItems.map((item, index) => (
                <div
                  key={item.id}
                  className="group overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => openImageDialog(index)}
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      unoptimized={item.src.startsWith('https://')} // Don't optimize external URLs
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <div className="p-4 text-white">
                        <p className="font-medium">{language === 'en' ? item.description :
                          item.description
                            .replace('Highlights of Blooming Roses', 'ബ്ലൂമിംഗ് റോസസിന്റെ ഹൈലൈറ്റുകൾ')
                            .replace('Blooming Roses 2025', 'ബ്ലൂമിംഗ് റോസസ് 2025')
                            .replace('Group photo of Blooming Roses 2024', 'ബ്ലൂമിംഗ് റോസസ് 2024 ഗ്രൂപ്പ് ഫോട്ടോ')
                            .replace('Blooming Roses 2022', 'ബ്ലൂമിംഗ് റോസസ് 2022')
                            .replace('Blooming Roses 2023', 'ബ്ലൂമിംഗ് റോസസ് 2023')
                        }</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="text-sm text-gray-600">{language === 'en' ? item.description :
                      item.description
                        .replace('Highlights of Blooming Roses', 'ബ്ലൂമിംഗ് റോസസിന്റെ ഹൈലൈറ്റുകൾ')
                        .replace('Blooming Roses 2025', 'ബ്ലൂമിംഗ് റോസസ് 2025')
                        .replace('Group photo of Blooming Roses 2024', 'ബ്ലൂമിംഗ് റോസസ് 2024 ഗ്രൂപ്പ് ഫോട്ടോ')
                        .replace('Blooming Roses 2022', 'ബ്ലൂമിംഗ് റോസസ് 2022')
                        .replace('Blooming Roses 2023', 'ബ്ലൂമിംഗ് റോസസ് 2023')
                    }</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Videos Grid */}
          {activeTab === 'videos' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {videoGalleryItems.map((item, index) => (
                <div
                  key={item.id}
                  className="group overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => openVideoDialog(index)}
                >
                  <div className="relative aspect-video overflow-hidden">
                    {/* Video thumbnail */}
                    <div className="relative w-full h-full">
                      <Image
                        src={item.thumbnailUrl}
                        alt={`Thumbnail for ${item.description}`}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        unoptimized
                        priority={index < 4} // Prioritize loading for first 4 images
                      />
                    </div>

                    {/* Play button overlay */}
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center">
                        <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[16px] border-l-white border-b-[10px] border-b-transparent ml-1"></div>
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="text-sm text-gray-600">{language === 'en' ? item.description : item.description.replace('Highlights from', 'ഹൈലൈറ്റുകൾ').replace('Promo video for', 'പ്രമോ വീഡിയോ')}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </Container>
      </div>

      {/* Image Lightbox Dialog */}
      <Dialog open={isDialogOpen && selectedImageIndex !== null} onOpenChange={handleDialogClose}>
        <DialogContent className="max-w-5xl p-0 bg-black border-none overflow-hidden rounded-lg" onEscapeKeyDown={handleDialogClose}>
          {selectedImageIndex !== null && (
            <div className="relative w-full h-[80vh]">
              <Image
                src={imageGalleryItems[selectedImageIndex].src}
                alt={imageGalleryItems[selectedImageIndex].alt}
                fill
                className="object-contain"
                unoptimized={imageGalleryItems[selectedImageIndex].src.startsWith('https://')}
              />

              {/* Navigation Arrows */}
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  navigateImages('prev')
                }}
                className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors"
                aria-label="Previous image"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-white">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation()
                  navigateImages('next')
                }}
                className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors"
                aria-label="Next image"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-white">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </button>

              {/* Image Info */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 text-white">
                <p className="text-sm text-gray-300">{language === 'en' ? imageGalleryItems[selectedImageIndex].description :
                  imageGalleryItems[selectedImageIndex].description
                    .replace('Highlights of Blooming Roses', 'ബ്ലൂമിംഗ് റോസസിന്റെ ഹൈലൈറ്റുകൾ')
                    .replace('Blooming Roses 2025', 'ബ്ലൂമിംഗ് റോസസ് 2025')
                    .replace('Group photo of Blooming Roses 2024', 'ബ്ലൂമിംഗ് റോസസ് 2024 ഗ്രൂപ്പ് ഫോട്ടോ')
                    .replace('Blooming Roses 2022', 'ബ്ലൂമിംഗ് റോസസ് 2022')
                    .replace('Blooming Roses 2023', 'ബ്ലൂമിംഗ് റോസസ് 2023')
                }</p>
              </div>

              {/* Close Button */}
              <button
                onClick={handleDialogClose}
                className="absolute right-4 top-4 w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors"
                aria-label="Close"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-white">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Video Lightbox Dialog */}
      <Dialog open={isDialogOpen && selectedVideoIndex !== null} onOpenChange={handleDialogClose}>
        <DialogContent className="max-w-5xl p-0 bg-black border-none overflow-hidden rounded-lg" onEscapeKeyDown={handleDialogClose}>
          {selectedVideoIndex !== null && (
            <div className="relative flex items-center justify-center w-full max-h-[90vh] bg-black">
              {/* Video player using HTML5 video element */}
              <video
                src={videoGalleryItems[selectedVideoIndex].videoUrl}
                className="max-w-full max-h-[80vh] object-contain"
                controls
                autoPlay
                playsInline
              >
                Your browser does not support the video tag.
              </video>

              {/* Navigation Arrows */}
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  navigateVideos('prev')
                }}
                className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors z-10"
                aria-label="Previous video"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-white">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation()
                  navigateVideos('next')
                }}
                className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors z-10"
                aria-label="Next video"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-white">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </button>

              {/* Video Info */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4 text-white z-10">
                <p className="text-sm text-gray-300">{language === 'en' ? videoGalleryItems[selectedVideoIndex].description : videoGalleryItems[selectedVideoIndex].description.replace('Highlights from', 'ഹൈലൈറ്റുകൾ').replace('Promo video for', 'പ്രമോ വീഡിയോ')}</p>
              </div>

              {/* Close Button */}
              <button
                onClick={handleDialogClose}
                className="absolute right-4 top-4 w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors z-10"
                aria-label="Close"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-white">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
