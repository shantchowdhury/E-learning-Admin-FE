

const TrafficSources = () => {
  const data = [
    {
      id: 1,
      source: "Organic",
      user: 1000,
      sessions: 1000,
      bouceRate: 1000,
      duration: 1000,
    },

    {
      id: 2,
      source: "Direct",
      user: 1000,
      sessions: 1000,
      bouceRate: 1000,
      duration: 1000,
    },
    {
      id: 3,
      source: "Social",
      user: 1000,
      sessions: 1000,
      bouceRate: 1000,
      duration: 1000,
    },
    {
      id: 4,
      source: "Others",
      user: 1000,
      sessions: 1000,
      bouceRate: 1000,
      duration: 1000,
    },
  ];
  return (
    <div className="font-poppins py-5 px-6 w-[60%] bg-background border border-gray rounded-xl">
      <h2 className="text-dark text-xl font-medium"> Traffic Sources </h2>

        {/* table  */}
        <div className="mt-[20px]">
          <table className="w-full rounded-md">
            <thead>
              <tr className="bg-[#6a77e0]	">
                <th className={styles.th}> SOURCE </th>
                <th className={styles.th}> USERS </th>
                <th className={styles.th}> SESSIONS </th>
                <th className={styles.th}> BOUCE RATE </th>
                <th className={styles.th}> DURATION </th>
              </tr>
            </thead>

            <tbody>
              {data.map((item) => (
                <tr key={item.id} className="text-center">
                  <td className="border text-[15px] border-gray text-black p-[10px]"> {item.source} </td>
                  <td className={styles.td}>{item.user}</td>
                  <td className={styles.td}> {item.sessions} </td>
                  <td className={styles.td}> {item.bouceRate} </td>
                  <td className={styles.td}> {item.duration} </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};


const styles = {
  th: "text-white font-[400] border border-gray p-3",
  td: "border text-[15px] border-gray p-[10px]"
}

export default TrafficSources;
