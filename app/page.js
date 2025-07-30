import Image from "next/image";
import {Badge} from "@/components/ui/badge"
import { Button } from "@/components/ui/button";
import {Card, CardContent} from '@/components/ui/card'

import{Avatar, AvatarImage, AvatarFallback} from '@/components/ui/avatar'
import { ArrowRight} from "lucide-react";
import {FEATURES, STEPS, TESTIMONIALS} from '@/lib/landing'
import Link from "next/link";

export default function Home() {
  return (
   <div  className="flex flex-col pt-16">
    <section className="mt-20 pb-12 space-y-10 md:space-y-20 px-5">
      <div  className="container mx-auto px-4 md:px-6 text-center space-y-6">
        <Badge variant={"outline"} className={"bg-blue-100 text-blue-700 text-md "}>Simplify Spending. Amplify Living.</Badge>

        <h1 className="gradient-title mx-auto max-w-4xl text-4xl font-bold md:text-7xl">
          The Effortless Way to Handle Shared Expenses
        </h1>
        <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed">
          From tracking to settling — handle shared expenses the smart way, with no confusion over who owes whom.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {/* asChild bring Get Started and Arrow icon on same line you kind of think le display:flex */}
          <Button asChild size={"lg"} className="bg-gradient-to-r from-blue-600 to-sky-500 hover:from-blue-700 hover:to-sky-600 text-white font-semibold py-2 px-4 shadow-md transition duration-300"

>
            <Link href={"/dashboard"} >
            Get Started
            <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          
          <Button asChild variant={"outline"} size={"lg"} className="border border-blue-600 text-blue-600 hover:bg-blue-100 hover:text-blue-700 font-medium px-4 py-2 rounded-lg transition duration-300"


>
            <Link href={"#how-it-works"} >
            See How It Works
            {/* <ArrowRight className="ml-2 h-4 w-4" /> */}
            </Link>
          </Button>
        </div>
        <div className="container mx-auto max-w-5xl overflow-hidden rounded-xl shadow-xl">
          {/* priority -> means this image will load first */}
          <div className="gradient p-1 aspect-[16/9]">
            <Image src={"/hero.png"} width={1280} height={720} alt="Banner" className="rounded-lg mx-auto" priority />
          </div>
        </div>
      </div>
    </section>

    <section id="features" className="bg-gray-50 py-20">
    <div className="container mx-auto px-4 md:px-6 text-center">
      <Badge variant={"outline"} className={"bg-blue-100 text-blue-700 text-md "}>
        Features
      </Badge>

      <h2 className="gradient-title mt-2 text-3xl md:text-4xl">
        The Smarter Way to Manage and Split Shared Expenses
      </h2>

      <p className="mx-auto mt-3 max-w-[700px] text-gray-500 md:text-xl/relaxed">
      Our platform gives you all the tools you need to manage shared expenses effortlessly.
      </p>

      <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-3">
        {FEATURES.map(({title, Icon , bg , color, description}) => (
          <Card key={title} className={"flex flex-col items-center space-y-4 p-6 text-center"}>
            <div className={`rounded-full p-3 ${bg}`}>
              <Icon className={`h-6 w-6 ${color}`} />
            </div>
              <h3 className="text-xl font-bold">{title}</h3>
              <p className="text-gray-500">{description}</p>
          </Card>
        ))}
      </div>
    </div>
    </section>

       <section id="how-it-works" className="py-20">
    <div className="container mx-auto px-4 md:px-6 text-center">
      <Badge variant={"outline"} className={"bg-blue-100 text-blue-700 text-md " }>
        How It Works
      </Badge>

      <h2 className="gradient-title mt-2 text-3xl md:text-4xl">
         Share Expenses Without the Stress
      </h2>

      <p className="mx-auto mt-3 max-w-[700px] text-gray-500 md:text-xl/relaxed">
        Just a few easy steps to simplify group spending, split bills, and settle up — all in one place.
      </p>

      <div className="mx-auto mt-12 grid max-w-5xl gap-8 lg:grid-cols-3">
        {STEPS.map(({description, label, title}) => (
         <div key={label} className="flex flex-col items-center space-y-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-sky-100 text-sky-600 text-xl font-semibold shadow-sm"
>
              {label}
              </div>
              <h3 className="text-xl font-bold">{title}</h3>
              <p className="text-gray-500 text-center">{description}</p>
          </div>
        ))}
      </div>
    </div>
    </section>


    <section className="bg-gray-50 py-20">
    <div className="container mx-auto px-4 md:px-6 text-center">
      <Badge variant={"outline"} className={"bg-blue-100 text-blue-700 text-md " }>
        Testimonials
      </Badge>

      <h2 className="gradient-title mt-2 text-3xl md:text-4xl">
         What our users are saying
      </h2>

      {/* <p className="mx-auto mt-3 max-w-[700px] text-gray-500 md:text-xl/relaxed">
        Just a few easy steps to simplify group spending, split bills, and settle up — all in one place.
      </p> */}

      <div className="mx-auto mt-12 grid max-w-5xl gap-8 lg:grid-cols-3">
        {TESTIMONIALS.map(({quote , name , role, image}) => (
            <Card key={name}>
                <CardContent className="space-y-4 p-6">
                  <p className="text-gray-500">{quote}</p>
                  <div className="flex items-center space-x-3">
                    <Avatar className={"w-10 h-10"}>
                      <AvatarImage src={image} alt={name} />
                      <AvatarFallback>{name.charAt(0)}</AvatarFallback>
                    </Avatar>

                    <div className="text-left">
                      <p className="text-sm font-medium">{name}</p>
                      <p className="text-sm text-muted-foreground">{role}</p>
                    </div>
                  </div>
                </CardContent>  
          </Card>
        ))}
      </div>
    </div>
    </section>

    <section className="py-20 gradient ">
      <div className="container mx-auto px-4 md:px-6 text-center space-y-6">
        <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl text-white">The smarter way to split and settle expenses</h2>
        
        <p className="mx-auto max-w-[600px] text-blue-100 md:text-xl/relaxed">
        Join thousands who manage shared costs with ease. From trips to roommates — keep everything fair, fast, and stress-free.</p>

         <Button asChild size={"lg"} className="bg-white text-blue-600 hover:bg-blue-100 font-semibold py-2 px-4 shadow-md transition duration-300"

>
            <Link href={"/dashboard"} >
            Get Started
            <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        
      </div>
    </section>

    <footer className="border-t bg-gray-50 py-12 text-center text-sm text-muted-foreground">
      Made with 🧑‍💻 by Spring(Basant)
    </footer>
   </div>
  );
}
