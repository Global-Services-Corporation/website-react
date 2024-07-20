import { superbock, espacos, logoAecipa, parceiro1 } from "../../assets";

const SponsorsAndPartners: React.FC = () => {
  return (
    <section className="h-[542px] flex flex-col items-center justify-center w-full">
        <p className="font-semibold text-3xl">Patrocinadores e Parceiros</p>
      <div className="w-[1303px] flex items-center justify-center h-56">

          <img src={superbock} alt="" className="h-40 w-40" />
          <img src={espacos} alt="" className="h-38 w-40"/>
          <img src={logoAecipa} alt="" className="h-40 w-40"/>
          <img src={parceiro1} alt="" className="h-38 w-40"/>
       
      </div>
    </section>
  );
};

export default SponsorsAndPartners;
