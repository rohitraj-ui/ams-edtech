// export default function Brands({clients}) {  
//   const repeatCount = 4;
//   return (
//     <div className="brand-section fix section-padding">
//       <div className="container">
//         <p className="brand-title wow fadeInUp h5 font-bold tex-black mb-4" data-wow-delay=".3s">
//           Trusted By large and small businesses worldwide with{" "}
//           <b>Edtech Innovate - CRM</b>
//         </p>

//         <div className="mycustom-marque style-border">
//           <div className="left-shape"></div>
//           <div className="right-shape"></div>

//           <div className="scrolling-wrap style-2">
//             {Array.from({ length: repeatCount }).map((_, i) => (
//               <div className="comm" key={i}>
//                 {clients && clients.length > 0 ? (
//                   clients.map((client, j) => (
//                     <div className="text-center" key={j}>
//                       <img
//                         src={client.logo}
//                         alt={client.name || `brand-${j + 1}`}
//                         loading="lazy"
//                         fetchPriority="low"
//                         width="208"
//                         height="75"
//                       />
//                     </div>
//                   ))
//                 ) : (
//                   <p>No brands found</p>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }



export default function Brands({ clients }) {
  const repeatCount = 4;
  return (
    // <div className="brand-section fix section-padding">
    //   <div className="container">
    //     <p className="brand-title wow fadeInUp h5 font-bold tex-black mb-4" data-wow-delay=".3s">
    //       Trusted By large and small businesses worldwide with{" "}
    //       <b>Edtech Innovate - CRM</b>
    //     </p>

    //     <div className="mycustom-marque style-border">
    //       <div className="left-shape"></div>
    //       <div className="right-shape"></div>

    //       <div className="scrolling-wrap style-2">
    //         {Array.from({ length: repeatCount }).map((_, i) => (
    //           <div className="comm" key={i}>
    //             {clients && clients.length > 0 ? (
    //               clients.map((client, j) => (
    //                 <div className="text-center" key={j}>
    //                   <img
    //                     src={client.logo}
    //                     alt={client.name || `brand-${j + 1}`}
    //                     loading="lazy"
    //                     fetchPriority="low"
    //                     width="208"
    //                     height="75"
    //                   />
    //                 </div>
    //               ))
    //             ) : (
    //               <p>No brands found</p>
    //             )}
    //           </div>
    //         ))}
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div class="brand-section section-padding section-padding2">
      <div class="container">
        <div class="brand-wrapper style4">
          <div class="brand-title-2">
            <h6>
              <img src="assets/img/star-5.png" alt="img" className="me-2" loading="lazy" fetchPriority="low" />
              Trusted By businesses worldwide with{" "}
              <b>Edtech Innovate - AMS</b>
              <img src="assets/img/star-5.png" alt="img" className="ms-2" loading="lazy" fetchPriority="low" />
            </h6>
          </div>
          <div className="mycustom-marque">
            <div className="left-shape"></div>
            <div className="right-shape"></div>

            <div className="scrolling-wrap style-2">
              {Array.from({ length: repeatCount }).map((_, i) => (
                <div className="comm" key={i}>
                  {clients && clients.length > 0 ? (
                    clients.map((client, j) => (
                      <div className="text-center" key={j}>
                        <img
                          src={client.logo}
                          alt={client.name || `brand-${j + 1}`}
                          loading="lazy"
                          fetchPriority="low"
                          width="208"
                          height="75"
                        />
                      </div>
                    ))
                  ) : (
                    <p>No brands found</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}