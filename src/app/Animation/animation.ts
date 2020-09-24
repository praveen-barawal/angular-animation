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
      style({ zIndex: "1" }),
      animate("400ms ease-in", style({ transform: "translateY(-50%)" })),
      transition(":enter", [
        style({ transform: "translateY(-20%)", zIndex: "1" }),
        animate(
          "400ms ease-in",
          style({ transform: "translateY(-100%)", zIndex: "1" })
        )
      ])
    ])
  ]),

  trigger("slideInOutDown", [
    transition(":leave", [
      style({ zIndex: "1" }),
      animate("400ms ease-in", style({ transform: "translateY(50%)" })),
      transition(":enter", [
        style({ transform: "translateY(20%)", zIndex: "1" }),
        animate(
          "400ms ease-in",
          style({ transform: "translateY(100%)", zIndex: "1" })
        )
      ])
    ])
  ]),
  
];
