import {FaUserCircle, FaUserPlus} from 'react-icons/fa';
import {MdVerified} from 'react-icons/md';
import {IoMdAlert} from 'react-icons/io';
// import students from '../../images/students.png';
// import registered from '../../images/registered.png';
// import active from '../../images/active.png';
// import closed from '../../images/closed.png';

const StudentAnalytics = () => {

    const Card = function({heading, desc, icon, background}){
        return (
          <div className={`${styles.card} ${background}`}>
            <p className={styles.desc}> {desc} </p>
            <h2 className={styles.heading}> {heading} </h2>
            <div className={styles.icon}>
             {icon}
            </div>
          </div>
        )
    }

    const data = [
        {
            id: 2,
            text: "Registered Today",
            number: "1.34k",
            background: "bgGradientTwo",
            img: "/assets/images/registered.png"
        },
        {
            id: 3,
            text: "Active students",
            number: "183.5k",
            background: "bgGradientThree",
            img: "/assets/images/active.png"
        },
        {
            id: 4,
            text: "Lost students (Closed)",
            number: "1.22k",
            background: "bgGradientFour",
            img: "/assets/images/closed.png"
        },
    ];

    return (
    <div className="flex gap-5">
      <Card heading="200k" desc="Total Students" icon={<FaUserCircle />} background="from-blue to-indigo" />
      <Card heading="1.34K" desc="Registered Today" icon={<FaUserPlus />} background="from-light_yellow to-light_yellow" />
      <Card heading="112k" desc="Active Students" icon={<MdVerified />} background="from-light_green to-dark_green" />
      <Card heading="17k" desc="Lost Students (Closed)" icon={<IoMdAlert />} background="from-pink to-youtube" />
    </div>
    );
};

const styles = {
    card: 'p-5 rounded-lg flex-1 bg-gradient-to-bl relative h-[140px]',
    heading: "text-3xl font-poppins font-semibold pb-[5px] text-white",
    desc: "font-poppins font-light pb-[5px] text-white",
    icon: "text-white/20 absolute right-5 bottom-5 text-6xl"
}

export default StudentAnalytics;