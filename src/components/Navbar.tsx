const navOptions = ["Best Sellers", "Gift Ideas", "New Releases", "Today's Deals", "Customer Service"];

const Navbar = () => {
  return (
    <div className="flex justify-center space-x-6 w-3/5 h-12"
    style={{
      borderTop: "50px solid #0C1004",
      borderLeft: "25px solid transparent",
      borderRight: "25px solid transparent",
      height: "0",
      width: "80%",
    }}>
      <div className="absolute top-0 flex justify-center space-x-6">
        {navOptions.map((title) => (
          <h4 key={title} className="text-white text-base">{title}</h4>
        ))}
      </div>
    </div>
  )
}

export default Navbar