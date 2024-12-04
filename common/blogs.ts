
import paru from "../photos/paru.jpg";
import raj from "../photos/raj1.jpg";
export const blogs = [
  {
    title: "Defending champions Goa University secure pole position at ConQuest 2024 West Regional Round",
    description:
      "<p>Thirty-four teams from educational institutions across western India locked horns as ConQuest&mdash;India&rsquo;s premier quiz on Indian Constitution, history and politics&mdash;made its debut in Mumbai on 9 November.</p><p>Organised by the Centre for Law and Policy Research, Bengaluru (CLPR), ConQuest is the public outreach arm of its&nbsp;educational platform.</p><p>West Regional Round of ConQuest 2024 was organised in collaboration with the School of Law, Rights and Constitutional Governance at Tata Institute of Social Sciences, Mumbai. Justice Roshan Dalvi (Retd.) of Bombay High Court was the guest of honour at the event.</p><p>After a fiercely competitive preliminary round, six teams advanced to the regional finals, namely Indian Institute of Technology Bombay, Gujarat National Law University, National Law Institute University (NLIU) Bhopal, Goa University, and two teams from TISS Mumbai.</p><p>Next were the regional finals which kicked off with a question about freedom fighter Yusuf Mehrally, who along with members of the Bombay Youth League, dressed as coolies, welcomed a British delegation proposing constitutional reforms in the 1920s at the port in Bombay with a slogan he coined. He would go on to coin another slogan which gained currency after a stamp of approval from Mahatma Gandhi. Participants were asked to identify the two slogans. What were they? Simon, go back! And Quit India!</p>",
    createdBy: "Paruwaaaa gandu",
    createdAt: "22th November 2024",
    type: '',
    user: {
      name: "Paruwaaaa",
      number: "8051906026",
      image: paru,
      email: "Parorandi@69.com",
      selfIntro:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis velit nisi quas ipsam eos nam, rerum hic ad corporis, numquam laboriosam, cupiditate quos. Corporis nesciunt quisquam aspernatur, illo ex est, doloribus a repellat aut, explicabo pariatur. Velit blanditiis nostrum similique nisi earum. Impedit expedita excepturi iste consectetur labore, porro, officia error quas nulla, iure perspiciatis illo. Delectus quasi, deleniti consequuntur voluptatibus quos culpa eligendi facere recusandae tenetur cum? Aliquam officia, corporis, nihil et voluptatem ea modi voluptatibus reprehenderit illum, distinctio nemo reiciendis ex. Asperiores voluptates laudantium quod ex impedit hic nam veritatis ipsam eligendi, tempora mollitia ea. Necessitatibus, commodi nesciunt!",
      designation: "advocate",
      exam: "UPSC",
      college: "Indore se Padha hai",
      lincesedFrom: " Patna High Court"
    },
  },
  {
    title: "Constituion",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti quia deserunt accusamus, dolorum quod delectus commodi exercitationem itaque culpa consectetur eligendi vel ipsum omnis praesentium, cumque eveniet dolor suscipit minima aut. Dolorum eum vitae officia eius libero aliquid animi suscipit mollitia tenetur sit, officiis, esse, enim doloribus iste. Veniam, voluptatibus.",
    createdBy: "Paruwaaaa",
    createdAt: "22th November 2024",
    user: {
      name: "Raj Bhai",
      number: "8051924426",
      image: raj,
      email: "rajPiyaak@desi.com",
      selfIntro:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis velit nisi quas ipsam eos nam, rerum hic ad corporis, numquam laboriosam, cupiditate quos. Corporis nesciunt quisquam aspernatur, illo ex est, doloribus a repellat aut, explicabo pariatur. Velit blanditiis nostrum similique nisi earum. Impedit expedita excepturi iste consectetur labore, porro, officia error quas nulla, iure perspiciatis illo. Delectus quasi, deleniti consequuntur voluptatibus quos culpa eligendi facere recusandae tenetur cum? Aliquam officia, corporis, nihil et voluptatem ea modi voluptatibus reprehenderit illum, distinctio nemo reiciendis ex. Asperiores voluptates laudantium quod ex impedit hic nam veritatis ipsam eligendi, tempora mollitia ea. Necessitatibus, commodi nesciunt!",
      designation: "advocate",
      exam: "CJ",
      college: "Indore se Padha hai",
      lincesedFrom: "Indore high court"
    },
  },
];

export type blog={
  title:string,
  description:string,
  createdAt: string;
  createdBy: string,
  type:string,

}