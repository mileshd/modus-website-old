import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import './privacyPolicy.css'

const PrivacyPolicyPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Modus Planning Privacy Policy" />
      <div className="privacy-policy">
        <div className="container">
          <h1>Privacy Policy</h1>
          <p>
            This privacy policy has been compiled to better serve those who are concerned with how their 'Personally Identifiable Information' (PII) is being used online. PII, as described in US privacy law and information security, is information that can be used on its own or with other information to identify, contact, or locate a single person, or to identify an individual in context. Please read our privacy policy carefully to get a clear understanding of how we collect, use, protect or otherwise handle your Personally Identifiable Information in accordance with our website.
          </p>

          <h2>
            What personal information do we collect from the people that visit our blog, website or app?
          </h2>
          <p>
            When ordering or registering on our site, as appropriate, you may be asked to enter your name, email address, mailing address, phone number, credit card information or other details to help you with your experience.
          </p>

          <h2>
            When do we collect information?
          </h2>
          <p>
            We collect information from you when you place an order, fill out a form, Open a Support Ticket or enter information on our site.
          </p>

          <h2>
            How do we use your information?
          </h2>
          <p>
            We may use the information we collect from you when you register, make a purchase, sign up for our newsletter, respond to a survey or marketing communication, surf the website, or use certain other site features in the following ways:
          </p>
          <ul>
            <li>To personalize your experience and to allow us to deliver the type of content and product offerings in which you are most interested.</li>
            <li>To improve our website in order to better serve you.</li>
            <li>To allow us to better service you in responding to your customer service requests.</li>
            <li>To quickly process your transactions.</li>
            <li>To send periodic emails regarding your order or other products and services.</li>
            <li>To follow up with them after correspondence (live chat, email or phone inquiries)</li>
          </ul>
    
          <h2>
            How do we protect your information?
          </h2>
          <p>
            Our website is scanned on a regular basis for security holes and known vulnerabilities in order to make your visit to our site as safe as possible.
          </p>
          <p>
            Your personal information is contained behind secured networks and is only accessible by a limited number of persons who have special access rights to such systems, and are required to keep the information confidential. In addition, all sensitive/credit information you supply is encrypted via Secure Socket Layer (SSL) technology.
          </p>
          <p>
            We implement a variety of security measures when a user places an order enters, submits, or accesses their information to maintain the safety of your personal information.
          </p>
          <p>
            All transactions are processed through a gateway provider and are not stored or processed on our servers.
          </p>
    
          <h2>
            Do we use 'cookies'?
          </h2>
          <p>
            Yes. Cookies are small files that a site or its service provider transfers to your computer's hard drive through your Web browser (if you allow) that enables the site's or service provider's systems to recognize your browser and capture and remember certain information. For instance, we use cookies to help us remember and process the items in your shopping cart. They are also used to help us understand your preferences based on previous or current site activity, which enables us to provide you with improved services. We also use cookies to help us compile aggregate data about site traffic and site interaction so that we can offer better site experiences and tools in the future.
          </p>

          <h2>
            Third-party disclosure
          </h2>
          <p>
            We do not sell, trade, or otherwise transfer to outside parties your Personally Identifiable Information unless we provide users with advance notice. This does not include website hosting partners and other parties who assist us in operating our website, conducting our business, or serving our users, so long as those parties agree to keep this information confidential. We may also release information when it's release is appropriate to comply with the law, enforce our site policies, or protect ours or others' rights, property or safety.
          </p>
          <p>
            However, non-personally identifiable visitor information may be provided to other parties for marketing, advertising, or other uses.
          </p>

          <h2>
            Third-party links
          </h2>
          <p>
            Occasionally, at our discretion, we may include or offer third-party products or services on our website. These third-party sites have separate and independent privacy policies. We therefore have no responsibility or liability for the content and activities of these linked sites. Nonetheless, we seek to protect the integrity of our site and welcome any feedback about these sites.
          </p>


          <h2>
            California Online Privacy Protection Act
          </h2>
          <p>
            CalOPPA is the first state law in the nation to require commercial websites and online services to post a privacy policy. The law's reach stretches well beyond California to require any person or company in the United States (and conceivably the world) that operates websites collecting Personally Identifiable Information from California consumers to post a conspicuous privacy policy on its website stating exactly the information being collected and those individuals or companies with whom it is being shared.
          </p>
          <p>
             According to CalOPPA, we agree to the following:
          </p>
          <ul>
            <li>Users can visit our site anonymously.</li>
            <li>
              Once this privacy policy is created, we will add a link to it on our home page or as a minimum, on the first significant page after entering our website.
            </li>
            <li>
              Our Privacy Policy link includes the word 'Privacy' and can easily be found on the page specified above.
            </li>
          </ul>


          <h2>
            COPPA (Children Online Privacy Protection Act)
          </h2>
          <p>
            When it comes to the collection of personal information from children under the age of 13 years old, the Children's Online Privacy Protection Act (COPPA) puts parents in control. The Federal Trade Commission, United States' consumer protection agency, enforces the COPPA Rule, which spells out what operators of websites and online services must do to protect children's privacy and safety online.
          </p>
          <p>
            We do not specifically market to children under the age of 13 years old.
          </p>

          
          <h2>
            Fair Information Practices
          </h2>
          <p>
            The Fair Information Practices Principles form the backbone of privacy law in the United States and the concepts they include have played a significant role in the development of data protection laws around the globe. Understanding the Fair Information Practice Principles and how they should be implemented is critical to comply with the various privacy laws that protect personal information.
          </p>
          <p>
            In order to be in line with Fair Information Practices we will take the following responsive action, should a data breach occur, we will notify you via email within 7 business days.
          </p> 
          
          <h2>
            CAN SPAM Act
          </h2>
          <p>
            The CAN-SPAM Act is a law that sets the rules for commercial email, establishes requirements for commercial messages, gives recipients the right to have emails stopped from being sent to them, and spells out tough penalties for violations.
          </p>
          <p>
            We collect your email address in order to:
          </p>
          <ul>
            <li>Send information, respond to inquiries, and/or other requests or questions</li>
            <li>Process orders and to send information and updates pertaining to orders.</li>
            <li>Send you additional information related to your product and/or service</li>
          </ul>
          <p>
            To be in accordance with CANSPAM, we agree to the following:
          </p>
          <ul>
            <li>Not use false or misleading subjects or email addresses.</li>
            <li>Identify the message as an advertisement in some reasonable way.</li>
            <li>Include the physical address of our business or site headquarters.</li>
            <li>Monitor third-party email marketing services for compliance, if one is used.</li>
            <li>Honor opt-out/unsubscribe requests quickly.</li>
            <li>Allow users to unsubscribe by using the link at the bottom of each email.</li>
            <li>
              If at any time you would like to unsubscribe from receiving future emails, you can email us at info@onepagesoftware.com and we will promptly remove you from ALL correspondence.
            </li>
          </ul>

          <h2>
            Contacting Us
          </h2>
          <p>
            If there are any questions regarding this privacy policy, you may contact us using the information below.
          </p>
          <div>onepagesoftware.com</div>
          <div>248 Elkins Ln</div>
          <div>Lusby, MD 20657</div>
          <div>United States</div>
          <div><b>info@onepagesoftware.com</b></div>
          <div><b>301-752-0016</b></div>
        </div>
      </div>
    </Layout>
  )
}

export default PrivacyPolicyPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
