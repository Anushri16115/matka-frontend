import React from "react";
import { Link } from "react-router-dom";

const Satta220PattiChart: React.FC = () => {
  // All Panna Record Chart Data based on reference images
  const pannaRecordData = [
    {
      number: 1,
      pannas: ["137", "128", "146", "236", "245", "290", "380", "470", "489", "560", "678", "579", "119", "155", "227", "335", "344", "399", "568", "669", "777", "100"]
    },
    {
      number: 2,
      pannas: ["129", "138", "147", "156", "237", "246", "345", "390", "480", "570", "679", "588", "110", "228", "255", "336", "499", "660", "688", "778", "200", "444"]
    },
    {
      number: 3,
      pannas: ["120", "139", "148", "157", "238", "247", "256", "346", "490", "580", "670", "689", "166", "229", "337", "355", "445", "599", "779", "788", "300", "111"]
    },
    {
      number: 4,
      pannas: ["130", "149", "158", "167", "239", "248", "257", "347", "356", "590", "680", "789", "112", "220", "266", "338", "446", "455", "699", "770", "400", "888"]
    },
    {
      number: 5,
      pannas: ["140", "159", "168", "230", "249", "258", "267", "348", "357", "456", "690", "780", "113", "122", "177", "339", "366", "447", "799", "889", "500", "555"]
    },
    {
      number: 6,
      pannas: ["124", "160", "179", "250", "269", "278", "340", "359", "368", "458", "467", "890", "115", "133", "188", "223", "377", "449", "557", "566", "700", "999"]
    },
    {
      number: 7,
      pannas: ["124", "160", "179", "250", "269", "278", "340", "359", "368", "458", "467", "890", "115", "133", "188", "223", "377", "449", "557", "566", "700", "999"]
    },
    {
      number: 8,
      pannas: ["125", "134", "170", "189", "260", "279", "350", "369", "378", "459", "468", "567", "116", "224", "233", "288", "440", "477", "558", "990", "800", "666"]
    },
    {
      number: 9,
      pannas: ["126", "135", "180", "234", "270", "289", "360", "379", "450", "469", "478", "568", "117", "144", "199", "225", "388", "559", "577", "667", "900", "333"]
    },
    {
      number: 0,
      pannas: ["127", "136", "145", "190", "235", "280", "370", "389", "460", "479", "569", "578", "000", "118", "226", "244", "299", "335", "677", "899", "000", "222"]
    }
  ];

  // Hot Panna (Patti) Data
  const hotPannaData = [
    "100-[[ 1 ]]-777",
    "128-137-146-236-245-290-338-470-489-560-678-579-119-155-227-350-448-466-536-880-899",
    "200-[[ 2 ]]-444",
    "129-138-147-156-237-246-345-390-480-570-679-588-110-228-255-336-499-660-688-778",
    "300-[[ 3 ]]-111",
    "120-139-148-157-238-247-256-346-490-580-670-689-166-229-337-355-445-599-779-788",
    "400-[[ 4 ]]-888",
    "130-149-158-167-239-248-257-347-356-590-680-789-112-220-266-338-446-455-699-770",
    "500-[[ 5 ]]-555",
    "140-159-168-230-249-258-267-348-357-456-690-780-113-122-177-339-366-447-799-889",
    "600-[[ 6 ]]-222",
    "123-150-169-178-240-259-268-349-358-457-367-790-114-277-330-448-466-556-880-899",
    "700-[[ 7 ]]-999",
    "124-160-179-250-269-278-340-359-368-458-467-890-115-133-188-223-377-449-557-566",
    "800-[[ 8 ]]-666",
    "125-134-170-189-260-279-350-369-378-459-468-567-116-224-233-288-440-477-558-990",
    "900-[[ 9 ]]-333",
    "126-135-180-234-270-289-360-379-450-469-478-568-117-144-199-225-388-559-577-667"
  ];

  return (
    <div className="satta-220-patti-chart">
      <div className="container">
        {/* Header Section */}
        <div className="patti-header">
          <h1>ALL PANNA RECORD CHART</h1>
          <div className="sub-header">
            <h2>SATTA MATKA WEEKLY PATTI CHART</h2>
            <p>matka 220 patti, matka 220 patti chart, matka satta bazar 220 patti, 220 patti guessing, matka patti formula, 220 patti matka satta bazar com</p>
          </div>
        </div>

        {/* All Panna Record Section */}
        <div className="panna-record-section">
          <div className="section-header">ALL PANNA RECORD</div>
          
          {pannaRecordData.map((record, index) => (
            <div key={index} className="panna-record-item">
              <div className="number-circle">{record.number}</div>
              <div className="panna-numbers">
                {record.pannas.map((panna, pannaIndex) => (
                  <span key={pannaIndex} className="panna-number">
                    {panna}
                    {pannaIndex < record.pannas.length - 1 ? " " : ""}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Hot Panna Section */}
        <div className="hot-panna-section">
          <div className="section-header hot">ALL HOT PANNA (PATTI)</div>
          <div className="hot-panna-content">
            {hotPannaData.map((line, index) => (
              <div key={index} className="hot-panna-line">
                {line}
              </div>
            ))}
          </div>
        </div>

        {/* Footer Navigation */}
        <div className="patti-footer">
          <div className="nav-links">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/forum" className="nav-link">Matka Guessing</Link>
            <Link to="/charts" className="nav-link">Matka Chart</Link>
            <Link to="/online-play" className="nav-link">Matka Play</Link>
            <Link to="/weekly-jodi-panna" className="nav-link">Tara Matka</Link>
            <Link to="/indian-matka" className="nav-link">Indian Matka</Link>
            <Link to="/fix-matka" className="nav-link">Fix Matka</Link>
            <Link to="/sitemap" className="nav-link">Sitemap</Link>
          </div>
          <div className="footer-info">
            <div className="website-url">https://sattamatkadpboss.co</div>
            <div className="copyright">ALL RIGHTS RESERVED (2012-2023)</div>
            <div className="site-owner">SITE OWNER:-</div>
            <div className="owner-name">PRO. BIG BOSS SIR</div>
            <div className="contact-number">08103944012</div>
            <div className="website-url">https://sattamatkadpboss.co</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Satta220PattiChart;
