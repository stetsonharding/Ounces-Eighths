import dog from "../assets/dog.png";
import ada from "../assets/ada.png";
import atm from "../assets/atm.png";
import Badge from "./Badge";
import "../css/BadgeRow.css";

export default function BadgeRow() {
  return (
    <section className="badgeSection">
 

      <div className="badgeSection__shards" aria-hidden="true" />
      <div className="badgeSection__sweep" aria-hidden="true" />

      <Badge
        items={[
          { label: "Dog Friendly", imgSrc: dog },
          { topText: "ADA", label: "Accessible", imgSrc: ada },
          { label: "On-site ATM", imgSrc: atm },
        ]}
      />

 
    </section>
  );
}
