import kolkata from "./../assets/images/city/kol.jpg";
import Delhi from "./../assets/images/city/delhi.jpg";
import Mumbai from "./../assets/images/city/mumbai.jpg";
import Chennai from "./../assets/images/city/chennai.svg";
import Hyderabad from "./../assets/images/city/hybd.jpg";
import Pune from "./../assets/images/city/pune.jpg";
import Bangalore from "./../assets/images/city/banalore.jpg";
import Ahmedabad from "./../assets/images/city/ambd.jpg";
import Surat from "./../assets/images/city/surat.jpg";
import Jaipur from "./../assets/images/city/jaipur.jpg";

// city service about img import

import kolAboutImg from "./../assets/images/cityservice/kol-about.png";
import bangAboutImg from "./../assets/images/cityservice/ban-about-img.jpg";

// city service team img import
// -------team kolkata
import kolTeamImg1 from "./../assets/images/cityservice/kol-team1-img.png";
// -------team bangalore
import bangTeamImg1 from "./../assets/images/cityservice/bang-team1-img.png";
import bangTeamImg2 from "./../assets/images/cityservice/bang-team2-img.jpg";




export const CityData = [
    {
        cityName: "Kolkata",
        cityImage: kolkata,
    },
    {
        cityName: "Delhi",
        cityImage: Delhi,
    },
    {
        cityName: "Mumbai",
        cityImage: Mumbai,
    },
    {
        cityName: "Chennai",
        cityImage: Chennai,
    },
    {
        cityName: "Hyderabad",
        cityImage: Hyderabad,
    },
    {
        cityName: "Pune",
        cityImage: Pune,
    },
    {
        cityName: "Bangalore",
        cityImage: Bangalore,
    },
    {
        cityName: "Ahmedabad",
        cityImage: Ahmedabad,
    },
    {
        cityName: "Surat",
        cityImage: Surat,
    },
    {
        cityName: "Jaipur",
        cityImage: Jaipur,
    },
]

export const ServiceInCity = [
    {
        city: "Kolkata",
        cityAboutImg: kolAboutImg,
        aboutText: [
            "mySunar is the perfect choice for parents in Vadodara who want baby ear piercing services.",
            "We offer a safe and hygienic environment for the procedure, ensuring that your baby's health and comfort are our top priority.",
            "At mySunar, we use the highest quality metals and tools to ensure a hygienic and painless process.",
            "Trust in our years of expertise and our commitment to quality for adorning your baby's ears with beauty.",
            "Choose mySunar for a stress-free and enjoyable experience for both you and your baby.",
        ],
        teamMember: [
            {
                name: "John Doe",
                role: "Piercer",
                background: " Lives with home maker wife, father and mother, has a jewellery shop.",
                Community: "Daivadnya Sonar",
                Experience: 10,
                image: kolTeamImg1,
                Language: " Hindi, Marathi, Gujarati"
            },
        ]
    },
    {
        city: "Bangalore",
        cityAboutImg: bangAboutImg,
        aboutText: [
            "mySunar in Bangalore stands out as the leading baby ear piercing service with a blend of traditional care and modern techniques.",
            "In Bangalore's fast-paced tech environment, we offer a safe, clean and gentle ear piercing experience for babies and their parents.",
            "Our expert piercers in Bangalore use precision-driven methods to ensure minimal discomfort and a swift process, all while adhering to the highest standards of hygiene.",
            "Choose from our exquisite collection of baby-friendly earrings.",
            "Join the many satisfied Bangalore parents who have chosen us for a memorable milestone.",
        ],
        teamMember: [
            {
                name: "Shivanna L",
                role: "Piercer",
                background: "Home maker wife, Son has completed MBA and is on job, Daughter is in her engineering.",
                Community: "Sonar",
                Experience: 35,
                image: bangTeamImg1,
                Language: "Hindi, English, Kannada, Telugu, Tamil"
            },
            {
                name: "K Eshwara Chari",
                role: "Piercer",
                background: "Entrepreneur wife, a son in the 9th standard.",
                Experience: 25,
                Community: "Vishwakarma Sonar",
                image: bangTeamImg2,
                Language: "Hindi, Kannada, Telugu, Tamil"
            },
        ]
    }
]