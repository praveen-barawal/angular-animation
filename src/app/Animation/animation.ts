import {
  trigger,
  state,
  style,
  transition,
  animate,
  group,
  query,
  stagger,
  keyframes
} from "@angular/animations";



export const AngularAnimation = [
  trigger("slideInOutUp", [
    transition(":leave", [
      style({ zIndex: "0" }),
      animate("400ms ease-out", 
      style(
        { transform: "translateY(-80%)"
           })),
      transition(":enter", [
        style({
           transform: "translateY(-50%)",
            //zIndex: "1",
            opacity: 0
             }),
        animate(
          "400ms ease-in",
          style({
             transform: "translateY(-100%)", 
            // zIndex: "1",
             opacity: 0
              })
        )
      ])
    ])
  ]),

  trigger("slideInOutDown", [
    transition(":leave", [
      style({ zIndex: "1" }),
      animate("400ms ease-out", style({ transform: "translateY(100%)" })),
      transition(":enter", [
        style({
           transform: "translateY(-20%)",
            zIndex: "1",
            opacity: 0 
            }),
        animate(
          "600ms ease-in-out",
          style({
             transform: "translateY(-200%)", 
             zIndex: "1",
             opacity: 0 
             })
        )
      ])
    ])
  ]),

   trigger("slide", [
    transition(':enter', [
      style({ opacity: 0 }),
      animate(`1s ease-in-out`)
    ]),
    transition(':leave', [
      animate(`1ms ease-in-out`,
       style({ opacity: 0 }))])
  ])
  
];
