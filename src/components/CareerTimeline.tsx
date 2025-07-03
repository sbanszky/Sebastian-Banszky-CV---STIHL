import { Building2, GraduationCap, Cloud, Shield, Server, Cpu } from "lucide-react";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import { useState } from "react";

const CareerTimeline = () => {
  const [selectedExperience, setSelectedExperience] = useState<number | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);

  const experiences = [
    {
      company: "UPC",
      role: "Network Engineer",
      description: `Started my career at this pan-European telecom provider, coordinating backbone upgrades alongside the NOC in Bucharest. Handled Cisco 7600 series routers and redesigned the access layer for Timișoara.

In the second phase of my time there, I was involved in a strategic project to modernize the network architecture—transitioning from a traditional North-South Core-Distribution-Access design to an East-West Spine-Leaf model. This transformation replaced legacy Cisco 7609 (core) and 7604 (distribution) routers with Juniper MX440 platforms, enabling:

• Higher throughput and increased scalability
• Better horizontal traffic flow across the fabric
• Migration from bulky Cisco XENPAK optics to high-density SFP+ modules, significantly increasing port-per-slot capacity and reducing operational overhead`,
      icon: Building2,
      color: "blue",
      image: "https://images.banszky.men/cv/traditiona-new-arch.jpeg"
    },
    {
      company: "Polytechnic University",
      role: "Cisco CCNA Instructor",
      description: "Taught Cisco CCNA while working at UPC. After a year and a half, awarded Cisco's Expert Instructor Excellence Badge for maintaining an 80%+ student pass rate.",
      icon: GraduationCap,
      color: "blue",
      image: "https://images.banszky.men/cv/CCNA-expert-instructor.jpg"
    },
    {
      company: "AtoS",
      role: "Security Engineer",
      description: "Worked mainly in the security domain with Checkpoint, Palo Alto, and Cisco ASA, handling upgrades and firewall rule base management. Participated in on-site data center visits in Germany and Belgium.",
      icon: Shield,
      color: "blue",
      image: [
        "https://images.banszky.men/cv/01Atos.jpeg",
        "https://images.banszky.men/cv/02Atos.jpeg",
        "https://images.banszky.men/cv/03Atos.jpeg",
        "https://images.banszky.men/cv/04Atos.jpeg",
        "https://images.banszky.men/cv/05Atos.jpeg",
        "https://images.banszky.men/cv/06Atos.jpeg",
        "https://images.banszky.men/cv/07Atos.jpeg",
      ]
    },
    {
      company: "Nokia",
      role: "Newtwork engineer followed by Cloud Integration Engineer",
      description: "Had two roles: managing a large African IP backbone with UK-based data centers, and as a Cloud Integration Engineer. Trained in Espoo, Finland, then led full on-site deployment in Chișinău, Moldova.",
      icon: Cloud,
      color: "blue",
      image: [
        "https://images.banszky.men/cv/01NokiaCNF-test.jpeg",
        "https://images.banszky.men/cv/02NokiaCNA-test.jpeg",
        "https://images.banszky.men/cv/01Alcatel.jpeg",
        "https://images.banszky.men/cv/02Alcatel.jpeg",
        "https://images.banszky.men/cv/03Alcatel.jpeg",
        "https://images.banszky.men/cv/04Alcatel.jpeg",
        "https://images.banszky.men/cv/05Alcatel.jpeg",
        "https://images.banszky.men/cv/06Alcatel.jpeg",
        "https://images.banszky.men/cv/07Alcatel.jpeg",
        "https://images.banszky.men/cv/08Alcatel.jpeg",
        "https://images.banszky.men/cv/09Alcatel.jpeg",
        "https://images.banszky.men/cv/010Alcatel.jpeg",
        "https://images.banszky.men/cv/011Alcatel.jpeg",
        "https://images.banszky.men/cv/012Alcatel.jpeg",
        "https://images.banszky.men/cv/013Alcatel.jpeg"
      ]
    },
    {
      company: "IBM",
      role: "Global Data Center Networking Engineer",
      description: "Worked for almost 4 years in a global team managing 7 data centers under a 'follow the sun' model. Extensive work with Vyatta, pfSense, Cisco ASA, and migrated Core DC ASA firewalls to Cisco Firepower.",
      icon: Server,
      color: "blue",
      image: [
        "https://images.banszky.men/cv/01IBM.jpeg",
        "https://images.banszky.men/cv/02IBM.jpeg",
        "https://images.banszky.men/cv/07IBM.jpeg",
        "https://images.banszky.men/cv/04IBM.jpeg",
        "https://images.banszky.men/cv/05IBM.jpeg"
      ]
    },
    {
      company: "Cloudbasesolutions",
      role: "Network and Cloud Engineer",
      description: "Helped relocate and rebuild a small data center. Handled pfSense BGP routing, Arista MLAG switching, and Proxmox-based server infrastructure across 3 racks.",
      icon: Building2,
      color: "blue",
      image: null
    },
    {
      company: "Homelab",
      role: "Proxmox Server: Security & Networking Virtualization",
      description: `Hardware Specs:

CPU: Intel i7 (14th 14700k, 20 cores for robust VM performance)
RAM: 128GB DDR5
Storage: 10TB HDD 1x4TB (for NAS) + 1x2TB SSD (for ISO images) + 1X4TB NVMe SSD (for Proxmox OS and VM storage cache)
External storage: 12TB for Backup
Networking: Dual 1GbE NICs (upgradable to 10GbE for high-speed networking VMs) + PCIe Wi-Fi card (for wireless testing)
PSU: 850W Gold for efficiency and expansion

Proxmox VE Configuration:

Hypervisor: Proxmox VE (latest, 8.3.1) for managing VMs and containers
Storage Setup: NVMe SSD for fast VM/container storage
Networking: VLANs and pfSense firewall configured for isolated security and networking labs (e.g., DMZ, SEC infected VMs, LAN).`,
      icon: Cpu,
      color: "blue",
      image: [
        "https://images.banszky.men/cv/01Homelab.jpeg",
        "https://images.banszky.men/cv/images_banszky_he_DDNS.jpeg",
        "https://images.banszky.men/cv/birou.jpeg",
        "https://images.banszky.men/cv/proiector.jpeg"
      ]
    }
  ];

  const getColorClasses = (color: string) => {
    return "text-blue-500 border-blue-500 bg-blue-500/10";
  };

  const openImageDialog = (experienceIndex: number, imageIndex: number) => {
    setSelectedExperience(experienceIndex);
    setSelectedImageIndex(imageIndex);
  };

  const closeImageDialog = () => {
    setSelectedExperience(null);
    setSelectedImageIndex(0);
  };

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
          Career Journey
        </h2>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="flex flex-col md:flex-row items-start gap-8">
              <div className="flex-shrink-0">
                <div className={`p-4 rounded-full border-2 ${getColorClasses(exp.color)}`}>
                  <exp.icon className="w-8 h-8" />
                </div>
              </div>
              
              <div className="flex-grow">
                <div className="bg-gray-900/40 backdrop-blur-lg rounded-2xl p-8 border border-gray-700 hover:border-gray-600 transition-all duration-300">
                  <h3 className="text-2xl font-bold mb-2 text-blue-500">
                    {exp.company}
                  </h3>
                  <h4 className="text-xl text-gray-300 mb-4">{exp.role}</h4>
                  <p className="text-gray-400 leading-relaxed mb-6 whitespace-pre-line">{exp.description}</p>
                  
                  {exp.image && (
                    <div className="flex flex-wrap gap-4">
                      {(Array.isArray(exp.image) ? exp.image : [exp.image]).map((img, imgIndex) => (
                        <div
                          key={imgIndex}
                          className="bg-gray-800/50 rounded-lg p-4 border border-gray-600 cursor-pointer hover:border-gray-500 transition-colors"
                          onClick={() => openImageDialog(index, imgIndex)}
                        >
                          <div className="w-32 h-24 rounded-lg overflow-hidden">
                            <img
                              src={img}
                              alt={`${exp.company} Image ${imgIndex + 1}`}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Image Dialog */}
        {selectedExperience !== null && (
          <Dialog open={true} onOpenChange={closeImageDialog}>
            <DialogContent style={{ maxWidth: '90vw', maxHeight: '90vh' }}>
              <DialogHeader>
                <DialogTitle>{experiences[selectedExperience].company} - Images</DialogTitle>
              </DialogHeader>
              <div className="w-full h-full flex items-center justify-center">
                {(() => {
                  const exp = experiences[selectedExperience];
                  const images = Array.isArray(exp.image) ? exp.image : [exp.image];
                  
                  if (images.length === 1) {
                    return (
                      <img 
                        src={images[0]} 
                        alt={`${exp.company} Image`} 
                        className="w-full h-auto max-h-[80vh] object-contain"
                      />
                    );
                  }
                  
                  return (
                    <Carousel className="w-full max-w-4xl" opts={{ startIndex: selectedImageIndex }}>
                      <CarouselContent>
                        {images.map((image, idx) => (
                          <CarouselItem key={idx}>
                            <img 
                              src={image} 
                              alt={`${exp.company} Image ${idx + 1}`} 
                              className="w-full h-auto max-h-[80vh] object-contain"
                            />
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                      <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2" />
                      <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2" />
                    </Carousel>
                  );
                })()}
              </div>
            </DialogContent>
          </Dialog>
        )}

        <div className="mt-16 text-center">
          <div className="bg-gray-900/40 backdrop-blur-lg rounded-2xl p-8 border border-gray-700">
            <h3 className="text-2xl font-bold mb-4 text-blue-500">Summary</h3>
            <p className="text-gray-300 leading-relaxed max-w-4xl mx-auto text-lg">
              I bring solid experience in <span className="text-blue-400 font-semibold">routing, switching, firewalls, data centers, and cloud integration</span>, 
              with a strong focus on <span className="text-blue-500 font-semibold">doing things properly and efficiently.</span> <span className="text-gray-300 leading-relaxed max-w-4xl mx-auto text-lg"> My strength lies in building, upgrading, and transforming network infrastructures at scale.

I've led backbone upgrades, migrated architectures from North-South to East-West (Spine-Leaf), deployed cloud-native platforms like OpenStack, and handled multivendor security stacks across Cisco, Juniper, Check Point, Palo Alto, Arista, Vyatta, and pfSense. Whether it's fine-tuning routing, segmenting VLANs, enforcing QoS, or standing up infrastructure in a new data center — I work end-to-end, from design to CLI.

Equally comfortable coordinating with NOCs, senior architects, and on-site or remote hands, I take pride in doing things right the first time — practically, efficiently, and thoroughly.</span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerTimeline;