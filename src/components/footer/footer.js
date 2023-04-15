import React from 'react'



const navigation = {
  jobOffers: [
    { name: 'Bologna', href: 'Bologna' },
    { name: 'Imola', href: 'Imola' },
    { name: 'Forlì', href: 'Forlì' },
    { name: 'Cesena', href: 'Cesena' },
    { name: 'Roma', href: 'Roma' },
    { name: 'Milano', href: 'Milano' },
    { name: 'Firenze', href: 'Firenze' },
  ],
  forCompanies: [
    { name: 'The company portal', href: '#' },
    { name: 'How to find the right team', href: '#' },
    { name: 'Why choose UP', href: '#' },
    { name: 'How to join', href: '#' },
    { name: 'Where to find us', href: '#' },
    { name: 'Company registration', href: '#' },
  ],
  aboutUs: [
    { name: 'Our mission', href: '#' },
    { name: 'Branches', href: '#' },
    { name: 'Why choose UP', href: '#' },
    { name: 'Where to find us', href: '#' },
    { name: 'Our application', href: '#' },
  ],
  workWithUs: [
    { name: 'Frequent questions', href: '#' },
    { name: 'How to find work', href: '#' },
    { name: 'Where to find us', href: '#' },
    { name: 'Why work with us', href: '#' },
    { name: 'How to create the CV', href: '#' },
    { name: 'Browse job offers', href: '#' },
    { name: 'Search for jobs by category', href: '#' },
    { name: 'Search for workplaces', href: '#' }
  ]
}

const Footer = () => {
  return (
    <footer className="bg-white" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>

      <div>
        <div className='flex flex-wrap justify-evenly p-6 py-20'>
          <div>
            <h3 className="text-[20px] xl:text-[26px] font-semibold leading-6 text-hero">Job Offers</h3>
            <ul role="list" className="mt-4 space-y-1">
              {navigation.jobOffers.map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="text-sm xl:text-[20px] leading-6 text-paragraph">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-10 md:mt-0">
            <h3 className="text-[20px] xl:text-[26px] font-semibold leading-6 text-hero">For companies</h3>
            <ul role="list" className="mt-4 space-y-1">
              {navigation.forCompanies.map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="text-sm xl:text-[20px] leading-6 text-paragraph">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[20px] xl:text-[26px] font-semibold leading-6 text-hero">About us</h3>
            <ul role="list" className="mt-4 space-y-1">
              {navigation.aboutUs.map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="text-sm xl:text-[20px] leading-6 text-paragraph">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-10 md:mt-0">
            <h3 className="text-[20px] xl:text-[26px] font-semibold leading-6 text-hero">Work with us</h3>
            <ul role="list" className="mt-4 space-y-1">
              {navigation.workWithUs.map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="text-sm xl:text-[20px] leading-6 text-paragraph">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex justify-center bg-footer-bar">
          <p className="py-6 text-xs xl:text-[16px] text-gray-500">
            UP agenzia per il lavoro srl • Via San Vitale Est 740/B - 40059 Medicina BO P.Iva e CF 04018461204
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer