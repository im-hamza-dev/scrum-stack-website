export const projects = [
    {
      name: "WYSIWYG Editor",
      overview:
        "A robust WYSIWYG editor built using React and Quill.js, offering advanced text editing capabilities, including font customization, alignments, image handling, and markdown conversion.",
      techStack: 
        "React Quill.js Vercel",
      
      features: [
        "Rich text editing with Quill.js",
        "Highlight specific text",
        "Toolbar with heading, font-size, and alignment options",
        "Image upload and resizing",
        "Toggle between rich text and HTML code view",
        "Markdown conversion with turndown.js",
        "Popup-style toolbar for usability",
      ],
      challenges: [
        "Addressed Quill's highlight quirks",
        "Created custom markdown rules for code blocks",
        "Integrated toolbar without disrupting editor flow",
      ],
      liveDemo: "https://wysiwyg-quill-editor.vercel.app/",
      image:"/WYSIWYGEditor.jpeg"
    },
    {
      name: "Nutrition Calculator",
      overview:
        "A feature-rich nutrition calculator designed to provide precise dietary insights with user-friendly unit handling, vegetable intake guidance, and theme customization.",
      techStack:"React Tailwind CSS Node.js Express.js MongoDB Vercel",
      
      features: [
        "Supports kg and lb units",
        "Vegetable intake calculator for balanced meals",
        "Accurate nutrition calculations",
        "Enhanced theme and UI improvements",
        "Comprehensive project documentation",
      ],
      challenges: [
        "Resolved SSL mixed content issues",
        "Improved calculation accuracy",
        "Updated UI for better usability",
      ],
      liveDemo: "https://precision-nutrition.vercel.app/",
      image:"/nutritionCalculator.jpg"
    },
    {
      name: "React QR Code Generator ",
      overview:
        "A QR code generator that logs user details like IP address, MAC address, location, and timestamp upon scanning.",
      techStack: "React.js Node.js Express.js MySQL Vercel",
      
      features: [
        "Generate and list QR codes",
        "Track user details on scan",
        "REST API endpoints for QR management",
      ],
      challenges: [
        "Secure and efficient data logging",
        "Integrated geolocation API",
        "Optimized database schema",
      ],
      liveDemo: "https://qr-code-generator-2024.me/list",
      image:"/qrCodeGenerator.png"
    },
    {
      name: "Blog Categories Management",
      overview:
        "A high-performance blogging platform with advanced category management, search functionality, and CMS integration.",
      techStack: "Gatsby.js React.js CMS Integration Netlify",
      
      features: [
        "Blog categories management",
        "Keyword-based search bar",
        "CMS integration for dynamic blogs",
        "SEO optimization",
        "95+ score on Google Page Speed Insights",
      ],
      challenges: [
        "Resolved complex SEO issues",
        "Optimized search bar efficiency",
        "Improved page load performance",
      ],
      liveDemo: "https://nagalcpa.com/",
      image:"/blogSite.jpg"
    },
    {
        name: "Colon Broom",
        overview:
          "An e-commerce application using Gatsby and Shopify, featuring subscriptions, payment integrations, and interactive product quizzes.",
        techStack:"Gatsby.js React Shopify API Shopify Payments Vercel",
        
        features: [
          "Gatsby + Shopify Starter App",
          "User-friendly checkout with Shopify APIs",
          "Multiple payment methods",
          "Up scribe subscription integration",
          "Dynamic product pages",
          "Product selection quiz",
        ],
        challenges: [
          "API limitations in payment gateway configuration",
          "Customized Up scribe settings",
          "Optimized Gatsby’s GraphQL data fetching",
        ],
        liveDemo: "https://colonbroom-v2.vercel.app",
        image:"/colonBroom.png"
      },
    {
      name: "Art-of-Qr",
      overview:
        "A web app for custom text designs with Printful and Printify integration for apparel mockups.",
      techStack: "React.js Node.js Express.js Supabase Vercel",
      
      features: [
        "Create custom text designs",
        "Upload custom fonts",
        "Download designs in PNG/SVG",
        "Printful and Printify integration for apparel mockups",
      ],
      challenges: [
        "Smooth font file processing",
        "Mockup API integration",
        "Ensured PNG/SVG export compatibility",
      ],
      liveDemo: "https://art-of-qr.vercel.app/",
      image:"/art-of-qr.png"
    },
    {
      name: "Dapster Automated Management System",
      overview:
        "A centralized system to manage Dapster mobile case-picking robots, ensuring smooth interaction between supervisors, teleoperators, and workers.",
      techStack:"React.js Xano (Database platform Vercel",
      
      features: [
        "Supervisor, teleoperator, and worker interfaces",
        "Real-time alerts and interventions",
        "Normalized database structure",
        "Seamless integration between frontend and backend",
      ],
      challenges: [
        "Structured database for complex operations",
        "Real-time alert and intervention handling",
        "User-friendly UI for different roles",
      ],
      liveDemo: "https://dapster.vercel.app/Dashboard",
      image:"/smart-visions1.jpg"
    },
  ];
  