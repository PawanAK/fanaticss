import Metamask from "../assets/images/icons/Metamask.svg"
const Sponsor = () => {
    const Sponsors =[
        {
            logo:Metamask
        },
    ]
  return (
    <div className="flex bg-white h-24 bg-opacity-10 justify-center items-center gap-3 my-12">
            {Sponsors.map((sponsor,ind) => (
            <img key={ind} src={sponsor.logo} className="h-8 w-fit" />
            ))}
    </div>
  )
}

export default Sponsor
