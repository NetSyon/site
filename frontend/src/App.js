import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [language, setLanguage] = useState('en');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'fr' : 'en');
  };

  const translations = {
    en: {
      nav: {
        home: 'Home',
        services: 'Services',
        about: 'About',
        contact: 'Contact',
        getStarted: 'Get Started'
      },
      hero: {
        title: 'Your Trusted',
        subtitle: 'IT Partner',
        description: 'Empowering homes, businesses, and enterprises with cutting-edge IT solutions. From personal tech support to enterprise-grade infrastructure.',
        exploreServices: 'Explore Services',
        getQuote: 'Get Quote'
      },
      services: {
        title: 'Comprehensive IT Solutions',
        subtitle: 'Tailored technology services for every need - from personal computing to enterprise infrastructure',
        home: {
          title: 'Home Users & Cybersecurity',
          description: 'Comprehensive home IT security and optimization services for modern families',
          items: [
            'Home Network Security & Setup',
            'Smart Device Protection & IoT Security',
            'Family Cyber Awareness Training',
            'Data Privacy & Backup Solutions',
            'Remote Access & VPN Configuration'
          ]
        },
        smb: {
          title: 'Small & Medium Business',
          description: 'Scalable IT solutions and security services designed to protect and grow your business',
          items: [
            'Managed IT Services & Support',
            'Business Email Security & Encryption',
            'Cloud Migration & Management',
            'Multi-Factor Authentication Setup',
            'Business Continuity Planning'
          ]
        },
        enterprise: {
          title: 'Enterprise Security',
          description: 'Advanced security implementations and compliance solutions for large organizations',
          items: [
            'Data Loss Prevention (DLP) Implementation',
            'Conditional Access Policy Design',
            'Identity & Access Management (IAM)',
            'Microsoft Defender Suite Deployment',
            'Information Protection & Classification'
          ]
        },
        learnMore: 'Learn More'
      },
      whyChoose: {
        title: 'Why Choose NetSyon?',
        subtitle: 'Experience the difference of working with a trusted IT partner',
        fastResponse: {
          title: 'Fast Response',
          description: 'Quick response times and efficient problem resolution'
        },
        expertise: {
          title: 'Proven Expertise',
          description: 'Years of experience across all technology platforms'
        },
        costEffective: {
          title: 'Cost Effective',
          description: 'Competitive pricing with transparent service rates'
        }
      },
      about: {
        title: 'About NetSyon',
        description: 'With over a decade of experience in IT consulting, NetSyon has been the trusted technology partner for individuals, small businesses, and large enterprises across the region.',
        mission: {
          title: 'Mission',
          description: 'To simplify technology and empower our clients with reliable, innovative IT solutions that drive success.'
        },
        vision: {
          title: 'Vision',
          description: 'To be the leading IT consulting firm, known for exceptional service and innovative solutions.'
        }
      },
      contact: {
        title: 'Ready to Get Started?',
        subtitle: 'Contact us today for a project quote and discover how NetSyon can transform your technology experience',
        getInTouch: 'Get in Touch',
        phone: 'Phone',
        email: 'Email',
        address: 'Address',
        requestQuote: 'Request Quote',
        form: {
          name: 'Name',
          namePlaceholder: 'Your Name',
          email: 'Email',
          emailPlaceholder: 'your@email.com',
          serviceType: 'Service Type',
          selectService: 'Select Service',
          homeSupport: 'Home User Support',
          smb: 'Small/Medium Business',
          enterprise: 'Enterprise Solutions',
          message: 'Message',
          messagePlaceholder: 'Tell us about your IT needs...',
          sendMessage: 'Send Message'
        }
      },
      footer: {
        description: 'Your trusted IT partner for comprehensive technology solutions.',
        services: 'Services',
        company: 'Company',
        support: 'Support',
        copyright: '© 2024 NetSyon. All rights reserved.'
      }
    },
    fr: {
      nav: {
        home: 'Accueil',
        services: 'Services',
        about: 'À propos',
        contact: 'Contact',
        getStarted: 'Commencer'
      },
      hero: {
        title: 'Votre Partenaire',
        subtitle: 'IT de Confiance',
        description: 'Autonomiser les foyers, les entreprises et les grandes organisations avec des solutions IT de pointe. Du support technique personnel à l\'infrastructure de niveau entreprise.',
        exploreServices: 'Explorer les Services',
        getQuote: 'Obtenir un Devis'
      },
      services: {
        title: 'Solutions IT Complètes',
        subtitle: 'Services technologiques adaptés à chaque besoin - de l\'informatique personnelle à l\'infrastructure d\'entreprise',
        home: {
          title: 'Utilisateurs Domestiques & Cybersécurité',
          description: 'Services complets de sécurité et d\'optimisation IT domestique pour les familles modernes',
          items: [
            'Sécurité et Configuration du Réseau Domestique',
            'Protection des Appareils Intelligents & Sécurité IoT',
            'Formation de Sensibilisation Cyber Familiale',
            'Solutions de Confidentialité et Sauvegarde de Données',
            'Configuration d\'Accès Distant & VPN'
          ]
        },
        smb: {
          title: 'Petites et Moyennes Entreprises',
          description: 'Solutions IT évolutives et services de sécurité conçus pour protéger et développer votre entreprise',
          items: [
            'Services IT Gérés & Support',
            'Sécurité et Chiffrement des E-mails Professionnels',
            'Migration et Gestion Cloud',
            'Configuration d\'Authentification Multi-Facteurs',
            'Planification de Continuité d\'Activité'
          ]
        },
        enterprise: {
          title: 'Sécurité Entreprise',
          description: 'Implémentations de sécurité avancées et solutions de conformité pour les grandes organisations',
          items: [
            'Implémentation de Prévention des Pertes de Données (DLP)',
            'Conception de Politiques d\'Accès Conditionnel',
            'Gestion des Identités et Accès (IAM)',
            'Déploiement de la Suite Microsoft Defender',
            'Protection et Classification des Informations'
          ]
        },
        learnMore: 'En Savoir Plus'
      },
      whyChoose: {
        title: 'Pourquoi Choisir NetSyon?',
        subtitle: 'Découvrez la différence de travailler avec un partenaire IT de confiance',
        fastResponse: {
          title: 'Réponse Rapide',
          description: 'Temps de réponse rapides et résolution efficace des problèmes'
        },
        expertise: {
          title: 'Expertise Prouvée',
          description: 'Des années d\'expérience sur toutes les plateformes technologiques'
        },
        costEffective: {
          title: 'Rentable',
          description: 'Prix compétitifs avec des tarifs de service transparents'
        }
      },
      about: {
        title: 'À Propos de NetSyon',
        description: 'Avec plus d\'une décennie d\'expérience dans le conseil IT, NetSyon a été le partenaire technologique de confiance pour les particuliers, les petites entreprises et les grandes entreprises de la région.',
        mission: {
          title: 'Mission',
          description: 'Simplifier la technologie et autonomiser nos clients avec des solutions IT fiables et innovantes qui favorisent le succès.'
        },
        vision: {
          title: 'Vision',
          description: 'Être la société de conseil IT leader, reconnue pour un service exceptionnel et des solutions innovantes.'
        }
      },
      contact: {
        title: 'Prêt à Commencer?',
        subtitle: 'Contactez-nous aujourd\'hui pour un devis de projet et découvrez comment NetSyon peut transformer votre expérience technologique',
        getInTouch: 'Nous Contacter',
        phone: 'Téléphone',
        email: 'E-mail',
        address: 'Adresse',
        requestQuote: 'Demander un Devis',
        form: {
          name: 'Nom',
          namePlaceholder: 'Votre Nom',
          email: 'E-mail',
          emailPlaceholder: 'votre@email.com',
          serviceType: 'Type de Service',
          selectService: 'Sélectionner un Service',
          homeSupport: 'Support Utilisateur Domestique',
          smb: 'Petite/Moyenne Entreprise',
          enterprise: 'Solutions Entreprise',
          message: 'Message',
          messagePlaceholder: 'Parlez-nous de vos besoins IT...',
          sendMessage: 'Envoyer le Message'
        }
      },
      footer: {
        description: 'Votre partenaire IT de confiance pour des solutions technologiques complètes.',
        services: 'Services',
        company: 'Entreprise',
        support: 'Support',
        copyright: '© 2024 NetSyon. Tous droits réservés.'
      }
    }
  };

  const t = translations[language];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="text-2xl font-bold text-slate-800">
                  Net<span className="text-blue-600">Syon</span>
                </h1>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <button onClick={() => scrollToSection('home')} className="text-slate-700 hover:text-blue-600 transition-colors font-medium">{t.nav.home}</button>
                <button onClick={() => scrollToSection('services')} className="text-slate-700 hover:text-blue-600 transition-colors font-medium">{t.nav.services}</button>
                <button onClick={() => scrollToSection('about')} className="text-slate-700 hover:text-blue-600 transition-colors font-medium">{t.nav.about}</button>
                <button onClick={() => scrollToSection('contact')} className="text-slate-700 hover:text-blue-600 transition-colors font-medium">{t.nav.contact}</button>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <button 
                onClick={toggleLanguage}
                className="flex items-center space-x-2 text-slate-700 hover:text-blue-600 transition-colors font-medium"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                </svg>
                <span>{language === 'en' ? 'FR' : 'EN'}</span>
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg transform hover:scale-105"
              >
                {t.nav.getStarted}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-slate-900/20 z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/2881232/pexels-photo-2881232.jpeg')`,
            filter: 'brightness(0.6)'
          }}
        ></div>
        
        <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
            {t.hero.title}
            <span className="block text-blue-400">{t.hero.subtitle}</span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            {t.hero.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => scrollToSection('services')}
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              {t.hero.exploreServices}
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-white/20 backdrop-blur-sm text-white border-2 border-white/30 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/30 transition-all"
            >
              {t.hero.getQuote}
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
              {t.services.title}
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              {t.services.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Home Users */}
            <div className="group bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-blue-100">
              <div className="bg-blue-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-700 transition-colors">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 21l4-4 4 4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">{t.services.home.title}</h3>
              <p className="text-slate-600 mb-6">{t.services.home.description}</p>
              <ul className="text-slate-600 space-y-2 mb-8">
                {t.services.home.items.map((item, index) => (
                  <li key={index} className="flex items-center">
                    <svg className="w-5 h-5 text-blue-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                {t.services.learnMore}
              </button>
            </div>

            {/* SMB */}
            <div className="group bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-green-100">
              <div className="bg-green-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-700 transition-colors">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">{t.services.smb.title}</h3>
              <p className="text-slate-600 mb-6">{t.services.smb.description}</p>
              <ul className="text-slate-600 space-y-2 mb-8">
                {t.services.smb.items.map((item, index) => (
                  <li key={index} className="flex items-center">
                    <svg className="w-5 h-5 text-green-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <button className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                {t.services.learnMore}
              </button>
            </div>

            {/* Enterprise */}
            <div className="group bg-gradient-to-br from-purple-50 to-indigo-50 p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-purple-100">
              <div className="bg-purple-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-purple-700 transition-colors">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">{t.services.enterprise.title}</h3>
              <p className="text-slate-600 mb-6">{t.services.enterprise.description}</p>
              <ul className="text-slate-600 space-y-2 mb-8">
                {t.services.enterprise.items.map((item, index) => (
                  <li key={index} className="flex items-center">
                    <svg className="w-5 h-5 text-purple-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <button className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
                {t.services.learnMore}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose NetSys */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
              Why Choose NetSyon?
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Experience the difference of working with a trusted IT partner
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 group-hover:bg-blue-50">
                <div className="bg-blue-600 w-16 h-16 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:bg-blue-700 transition-colors">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">Fast Response</h3>
                <p className="text-slate-600">Quick response times and efficient problem resolution</p>
              </div>
            </div>

            <div className="text-center group">
              <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 group-hover:bg-green-50">
                <div className="bg-green-600 w-16 h-16 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:bg-green-700 transition-colors">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">Proven Expertise</h3>
                <p className="text-slate-600">Years of experience across all technology platforms</p>
              </div>
            </div>

            <div className="text-center group">
              <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 group-hover:bg-purple-50">
                <div className="bg-purple-600 w-16 h-16 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:bg-purple-700 transition-colors">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">Cost Effective</h3>
                <p className="text-slate-600">Competitive pricing with transparent service rates</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
                About NetSyon
              </h2>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                With over a decade of experience in IT consulting, NetSyon has been the trusted technology partner 
                for individuals, small businesses, and large enterprises across the region.
              </p>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-lg mr-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-800 mb-2">Mission</h3>
                    <p className="text-slate-600">To simplify technology and empower our clients with reliable, innovative IT solutions that drive success.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-lg mr-4">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-800 mb-2">Vision</h3>
                    <p className="text-slate-600">To be the leading IT consulting firm, known for exceptional service and innovative solutions.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:pl-8">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1573497619860-6d82917e4ec8" 
                  alt="NetSyon Team"
                  className="w-full h-96 object-cover rounded-2xl shadow-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-blue-900 to-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Contact us today for a project quote and discover how NetSyon can transform your technology experience
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
                <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
                <div className="space-y-6">
                  <div className="flex items-center">
                    <div className="bg-blue-600 p-3 rounded-lg mr-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold">Phone</h4>
                      <p className="text-blue-200">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-blue-600 p-3 rounded-lg mr-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold">Email</h4>
                      <p className="text-blue-200">info@netsyon.com</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-blue-600 p-3 rounded-lg mr-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold">Address</h4>
                      <p className="text-blue-200">123 Technology Drive<br />Tech Valley, CA 94000</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
                <h3 className="text-2xl font-bold mb-6">Request Quote</h3>
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Service Type</label>
                    <select className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <option value="">Select Service</option>
                      <option value="home">Home User Support</option>
                      <option value="smb">Small/Medium Business</option>
                      <option value="enterprise">Enterprise Solutions</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <textarea 
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Tell us about your IT needs..."
                    ></textarea>
                  </div>
                  <button 
                    type="submit"
                    className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">
                Net<span className="text-blue-400">Syon</span>
              </h3>
              <p className="text-slate-400 mb-4">
                Your trusted IT partner for comprehensive technology solutions.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-slate-400 hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" className="text-slate-400 hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                  </svg>
                </a>
                <a href="#" className="text-slate-400 hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">Home IT Support</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Business Solutions</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Enterprise Infrastructure</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cloud Services</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Our Team</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-700 mt-8 pt-8 text-center text-slate-400">
            <p>&copy; 2024 NetSyon. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;