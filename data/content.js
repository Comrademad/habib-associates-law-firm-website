export const siteContent = {
  // Header Navigation
  navigation: {
    logo: "Legal Forum",
    menuItems: [
      { name: "Home", href: "/" },
      { name: "About", href: "/about" },
      { name: "Services", href: "/services" },
      { name: "Contact", href: "/contact" }
    ]
  },

  // Home Page Content
  home: {
    hero: {
      title: "Expert Legal Services in Pakistan",
      subtitle: "Providing comprehensive legal solutions with integrity, expertise, and dedication to justice",
      description: "With over 15 years of experience, Legal Forum offers professional legal services across all major areas of Pakistani law.",
      ctaText: "Get Legal Consultation",
      ctaLink: "/contact"
    },
    stats: [
      { number: "500+", label: "Cases Won" },
      { number: "15+", label: "Years Experience" },
      { number: "95%", label: "Success Rate" },
      { number: "24/7", label: "Support Available" }
    ],
    testimonials: [
      {
        name: "Muhammad Rashid",
        role: "Business Owner",
        content: "Excellent legal services. They handled my corporate case with utmost professionalism and achieved the best possible outcome.",
        rating: 5
      },
      {
        name: "Fatima Sheikh",
        role: "Individual Client",
        content: "Very satisfied with their family law services. They were compassionate and guided me through a difficult divorce process.",
        rating: 5
      }
    ]
  },

  // About Page Content
  about: {
    title: "About Legal Forum",
    subtitle: "Leading Legal Experts in Pakistan",
    description: "Established in 2008, Legal Forum has grown to become one of Pakistan's most trusted law firms. We specialize in providing comprehensive legal services across all major areas of Pakistani law.",
    mission: "To provide exceptional legal services while maintaining the highest standards of integrity, professionalism, and client satisfaction.",
    vision: "To be Pakistan's premier law firm, known for excellence in legal representation and unwavering commitment to justice.",
    values: [
      {
        title: "Integrity",
        description: "We maintain the highest ethical standards in all our legal practices."
      },
      {
        title: "Excellence",
        description: "We strive for excellence in every case we handle."
      },
      {
        title: "Client Focus",
        description: "Our clients' success is our primary objective."
      },
      {
        title: "Innovation",
        description: "We embrace modern legal practices and technology."
      }
    ]
  },

  // Services Content
  services: {
    title: "Our Legal Services",
    subtitle: "Comprehensive Legal Solutions",
    description: "We offer expert legal services across all major areas of Pakistani law, ensuring our clients receive the best possible representation.",
    mainServices: [
      {
        id: "criminal-law",
        title: "Criminal Law",
        description: "Expert defense in criminal cases including theft, fraud, assault, and serious crimes.",
        icon: "Shield",
        slug: "criminal-law"
      },
      {
        id: "family-law",
        title: "Family Law",
        description: "Divorce, child custody, inheritance, and family dispute resolution services.",
        icon: "Users",
        slug: "family-law"
      },
      {
        id: "corporate-law",
        title: "Corporate Law",
        description: "Business formation, contracts, mergers, acquisitions, and corporate governance.",
        icon: "Building",
        slug: "corporate-law"
      },
      {
        id: "civil-litigation",
        title: "Civil Litigation",
        description: "Property disputes, contract breaches, and general civil litigation matters.",
        icon: "Scale",
        slug: "civil-litigation"
      },
      {
        id: "property-law",
        title: "Property Law",
        description: "Real estate transactions, property disputes, and land acquisition matters.",
        icon: "Home",
        slug: "property-law"
      },
      {
        id: "labor-law",
        title: "Labor & Employment Law",
        description: "Employment disputes, labor rights, and workplace legal issues.",
        icon: "Briefcase",
        slug: "labor-law"
      },
      {
        id: "tax-law",
        title: "Tax Law",
        description: "Tax planning, disputes with tax authorities, and compliance matters.",
        icon: "Calculator",
        slug: "tax-law"
      },
      {
        id: "banking-law",
        title: "Banking & Finance Law",
        description: "Banking disputes, loan recovery, and financial regulatory matters.",
        icon: "CreditCard",
        slug: "banking-law"
      },
      {
        id: "constitutional-law",
        title: "Constitutional Law",
        description: "Constitutional petitions, fundamental rights, and public interest litigation.",
        icon: "Book",
        slug: "constitutional-law"
      },
      {
        id: "immigration-law",
        title: "Immigration Law",
        description: "Visa applications, citizenship matters, and immigration disputes.",
        icon: "Plane",
        slug: "immigration-law"
      },
      {
        id: "intellectual-property",
        title: "Intellectual Property",
        description: "Patents, trademarks, copyrights, and IP protection services.",
        icon: "Lightbulb",
        slug: "intellectual-property"
      }
    ]
  },

  // Individual Service Pages
  serviceDetails: {
    "criminal-law": {
      title: "Criminal Law Services",
      description: "Expert criminal defense representation across all types of criminal cases in Pakistan.",
      overview: "Our criminal law team provides comprehensive defense services for individuals facing criminal charges. We handle cases ranging from minor offenses to serious crimes, ensuring our clients receive the best possible legal representation.",
      services: [
        "Murder and homicide defense",
        "Theft and robbery cases",
        "Fraud and white-collar crimes",
        "Drug-related offenses",
        "Assault and battery cases",
        "Cybercrime defense",
        "Bail applications",
        "Appeals and revisions"
      ],
      process: [
        "Initial consultation and case assessment",
        "Evidence collection and analysis",
        "Legal strategy development",
        "Court representation",
        "Plea negotiations if applicable",
        "Trial proceedings",
        "Appeals if necessary"
      ]
    },
    "family-law": {
      title: "Family Law Services",
      description: "Compassionate legal support for all family-related legal matters.",
      overview: "We understand that family legal issues are sensitive and emotionally challenging. Our family law experts provide compassionate yet effective legal representation in all family matters.",
      services: [
        "Divorce proceedings (Khula, Talaq, Mubarat)",
        "Child custody and visitation rights",
        "Maintenance and alimony",
        "Inheritance and succession",
        "Marriage contracts (Nikah)",
        "Domestic violence cases",
        "Adoption procedures",
        "Family mediation"
      ],
      process: [
        "Confidential consultation",
        "Case evaluation and strategy",
        "Documentation preparation",
        "Mediation attempts",
        "Court proceedings if necessary",
        "Settlement negotiations",
        "Final decree implementation"
      ]
    },
    "corporate-law": {
      title: "Corporate Law Services",
      description: "Comprehensive business legal solutions for companies of all sizes.",
      overview: "Our corporate law team assists businesses with all legal aspects of corporate operations, from formation to complex transactions and disputes.",
      services: [
        "Company incorporation and registration",
        "Corporate governance and compliance",
        "Mergers and acquisitions",
        "Joint ventures and partnerships",
        "Commercial contracts",
        "Securities law compliance",
        "Corporate restructuring",
        "Business dispute resolution"
      ],
      process: [
        "Business needs assessment",
        "Legal structure recommendation",
        "Documentation and filing",
        "Compliance monitoring",
        "Ongoing legal support",
        "Transaction facilitation",
        "Dispute resolution"
      ]
    },
    "civil-litigation": {
      title: "Civil Litigation Services",
      description: "Expert representation in civil disputes and litigation matters.",
      overview: "Our civil litigation team handles a wide range of civil disputes, providing strategic legal representation to achieve favorable outcomes for our clients.",
      services: [
        "Contract disputes",
        "Property litigation",
        "Tort claims",
        "Commercial disputes",
        "Recovery suits",
        "Injunction applications",
        "Damages claims",
        "Alternative dispute resolution"
      ],
      process: [
        "Case analysis and merit assessment",
        "Pre-litigation negotiations",
        "Pleadings preparation",
        "Discovery and evidence gathering",
        "Court hearings and arguments",
        "Settlement negotiations",
        "Judgment enforcement"
      ]
    },
    "property-law": {
      title: "Property Law Services",
      description: "Complete legal solutions for all property-related matters.",
      overview: "We provide comprehensive property law services, helping clients navigate complex property transactions and resolve disputes effectively.",
      services: [
        "Property purchase and sale",
        "Title verification and due diligence",
        "Property disputes resolution",
        "Land acquisition matters",
        "Lease agreements",
        "Property development legal support",
        "Mortgage and financing documentation",
        "Property tax matters"
      ],
      process: [
        "Property documentation review",
        "Title search and verification",
        "Legal opinion and advice",
        "Transaction documentation",
        "Registration assistance",
        "Dispute resolution",
        "Ongoing legal support"
      ]
    },
    "labor-law": {
      title: "Labor & Employment Law Services",
      description: "Protecting workers' rights and assisting employers with compliance.",
      overview: "Our labor law experts provide comprehensive services to both employees and employers, ensuring fair treatment and legal compliance in workplace matters.",
      services: [
        "Employment contract drafting",
        "Wrongful termination cases",
        "Workplace harassment claims",
        "Labor dispute resolution",
        "Workers' compensation",
        "Union negotiations",
        "Employment policy development",
        "Compliance audits"
      ],
      process: [
        "Employment issue assessment",
        "Legal rights explanation",
        "Documentation review",
        "Negotiation with opposing party",
        "Labor court proceedings",
        "Settlement facilitation",
        "Compliance monitoring"
      ]
    },
    "tax-law": {
      title: "Tax Law Services",
      description: "Expert tax planning and dispute resolution services.",
      overview: "Our tax law specialists help individuals and businesses navigate Pakistan's complex tax system, ensuring compliance and resolving disputes with tax authorities.",
      services: [
        "Tax planning and advisory",
        "Income tax matters",
        "Sales tax compliance",
        "Tax dispute resolution",
        "Appeals before tax tribunals",
        "Tax audit representation",
        "Penalty reduction negotiations",
        "Tax compliance reviews"
      ],
      process: [
        "Tax situation analysis",
        "Compliance assessment",
        "Strategy development",
        "Documentation preparation",
        "Authority representation",
        "Dispute resolution",
        "Ongoing compliance support"
      ]
    },
    "banking-law": {
      title: "Banking & Finance Law Services",
      description: "Specialized legal services for banking and financial matters.",
      overview: "We provide expert legal services in banking and finance law, helping clients navigate complex financial regulations and resolve banking disputes.",
      services: [
        "Banking dispute resolution",
        "Loan recovery proceedings",
        "Financial regulatory compliance",
        "Banking contract review",
        "Credit facility documentation",
        "Mortgage enforcement",
        "Banking fraud cases",
        "Regulatory investigations"
      ],
      process: [
        "Financial matter assessment",
        "Regulatory compliance review",
        "Legal strategy formulation",
        "Documentation preparation",
        "Negotiation and mediation",
        "Court proceedings if needed",
        "Resolution implementation"
      ]
    },
    "constitutional-law": {
      title: "Constitutional Law Services",
      description: "Protecting fundamental rights through constitutional litigation.",
      overview: "Our constitutional law experts handle cases involving fundamental rights, constitutional interpretation, and public interest litigation.",
      services: [
        "Constitutional petitions",
        "Fundamental rights protection",
        "Public interest litigation",
        "Judicial review matters",
        "Administrative law cases",
        "Human rights advocacy",
        "Constitutional interpretation",
        "Government policy challenges"
      ],
      process: [
        "Constitutional issue identification",
        "Legal research and precedent analysis",
        "Petition drafting",
        "Court filing and service",
        "Oral arguments presentation",
        "Follow-up proceedings",
        "Judgment implementation"
      ]
    },
    "immigration-law": {
      title: "Immigration Law Services",
      description: "Complete immigration legal support and visa services.",
      overview: "We assist individuals and families with all aspects of immigration law, from visa applications to citizenship matters and immigration disputes.",
      services: [
        "Visa applications and renewals",
        "Work permit assistance",
        "Family reunification",
        "Citizenship applications",
        "Immigration appeals",
        "Deportation defense",
        "Investment visa guidance",
        "Immigration compliance"
      ],
      process: [
        "Immigration status assessment",
        "Eligibility determination",
        "Application preparation",
        "Document compilation",
        "Submission and follow-up",
        "Interview preparation",
        "Appeal proceedings if needed"
      ]
    },
    "intellectual-property": {
      title: "Intellectual Property Services",
      description: "Protecting and enforcing intellectual property rights.",
      overview: "Our IP law team helps clients protect their intellectual property assets through registration, enforcement, and strategic IP management.",
      services: [
        "Trademark registration and protection",
        "Patent applications and prosecution",
        "Copyright registration",
        "IP infringement litigation",
        "Licensing agreements",
        "Trade secret protection",
        "Domain name disputes",
        "IP portfolio management"
      ],
      process: [
        "IP asset identification",
        "Registrability assessment",
        "Application filing",
        "Prosecution and examination",
        "Registration completion",
        "Enforcement and protection",
        "Portfolio maintenance"
      ]
    }
  },

  // Contact Information
  contact: {
    title: "Contact Us",
    subtitle: "Get in Touch for Legal Consultation",
    description: "Contact us today for professional legal advice and representation. We're here to help you navigate your legal challenges.",
    office: {
      address: "Legal Forum, Lahore, Punjab, Pakistan",
      phone: "+92-42-1234-5678",
      email: "info@legalforum.com",
      hours: "Monday - Friday: 9:00 AM - 6:00 PM\nSaturday: 9:00 AM - 2:00 PM\nSunday: Closed"
    },
    emergencyContact: {
      phone: "+92-300-1234567",
      available: "24/7 Emergency Legal Support"
    }
  },

  // Footer Content
  footer: {
    logo: "Legal Forum",
    tagline: "Expert Legal Services in Pakistan",
    description: "Providing comprehensive legal solutions with integrity, expertise, and dedication to justice.",
    quickLinks: [
      { name: "About Us", href: "/about" },
      { name: "Our Services", href: "/services" },
      { name: "Contact", href: "/contact" },
      { name: "Privacy Policy", href: "/privacy" }
    ],
    services: [
      { name: "Criminal Law", href: "/services/criminal-law" },
      { name: "Family Law", href: "/services/family-law" },
      { name: "Corporate Law", href: "/services/corporate-law" },
      { name: "Civil Litigation", href: "/services/civil-litigation" }
    ],
    contact: {
      address: "Legal Forum, Lahore, Punjab, Pakistan",
      phone: "+92-42-1234-5678",
      email: "info@legalforum.com"
    },
    social: [
      { name: "Facebook", href: "#", icon: "Facebook" },
      { name: "Twitter", href: "#", icon: "Twitter" },
      { name: "LinkedIn", href: "#", icon: "Linkedin" },
      { name: "Instagram", href: "#", icon: "Instagram" }
    ],
    copyright: "© 2024 Legal Forum. All rights reserved."
  }
};
