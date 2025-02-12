 
const Quote = () => {
  return (
    <div className='hidden md:flex md:w-1/2 min-h-screen flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-gray-200 '>
     <div className="flex flex-col gap-3 justify-center p-24 max-md:p-4">
     <h1 className="font-extrabold text-2xl text-slate-700 min-md:text-xl">"The customer service I received was exceptional. The support team went above 
        and beyond to address my concerns."
      </h1>
      <div>
        <p className="font-bold text-slate-700">Jules Winnfield</p>
        <p className="font-semibold text-slate-400">CEO, Acme Inc</p>
      </div>
     </div>
    </div>
  )
}

export default Quote
