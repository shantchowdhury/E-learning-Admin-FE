// import shape from "../../images/Vectorshape.png";

const AnalyticsCard = () => {

  const Card = function({heading, desc, background}){
    return (
      <div className={`${styles.card} ${background}`}>
        <h2 className={styles.heading}> {heading} </h2>
        <p className={styles.desc}> {desc} </p>
        <img src="/assets/images/Vectorshape.png" alt="" />
      </div>
    )
  }

  return (
    <div className="flex gap-5">
      <Card heading="120,005K" desc="Impressions" background="from-blue to-indigo" />
      <Card heading="120,005K" desc="Engagments" background="from-light_green to-dark_green" />
      <Card heading="30%" desc="Bounce Rate" background="from-pink to-youtube" />
      <Card heading="120,005K" desc="Impressions" background="from-linkedin to-dark" />
    </div>
  );
};


const styles = {
  card: 'p-5 rounded-lg bg-gradient-to-bl',
  heading: "text-3xl font-poppins font-semibold pb-[5px] text-white",
  desc: "font-poppins font-light pb-[5px] text-white"
}

export default AnalyticsCard;
