import { Button } from "@/components/ui/button"

const Hero = () => {
  return (
    <section className="container grid lg:grid-cols-2 place-items-center py-10 md:py-32 gap-10">
      <div className="text-center lg:text-start space-y-6">
        <main className="text-4xl md:text-6xl font-semibold">
          <h1 className="inline">
            <span className="inline">
              Pay
            </span>{" "}
            Seamlessly, 
          </h1>{" "}
          Live{" "}
          <h2 className="inline">
            <span className="inline">
              Effortlessly
            </span>
          </h2>
        </main>

        <p className="text-sm text-muted-foreground md:w-10/12 mx-auto lg:mx-0 text-gray-300">
          Unlock the Power of Tap-to-Pay with our App: Enjoy the Ultimate Convenience and Security in Mobile Payments. Make Purchases, Send Money, Pay Bills and More, Effortlessly and Securely from your phone
        </p>

        <div className="space-y-4 md:space-y-0 md:space-x-4">
          <Button className="w-[200px] md:w-1/3">Create Account</Button>
        </div>
      </div>

      {/* Image by right side section */}
      <div className="z-10">
        <img src="./assets/images/side-img.png" className="w-full h-fit" alt="" />
      </div>

    </section>
  )
}

export default Hero