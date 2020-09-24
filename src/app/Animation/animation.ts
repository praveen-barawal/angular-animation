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
  trigger("slideInOut", [
    state(
      "in",
      style({
        "max-height": "500px",
        opacity: "1",
        visibility: "visible"
      })
    ),
    state(
      "out",
      style({
        "max-height": "0px",
        opacity: "0",
        visibility: "hidden"
      })
    ),
    transition("in => out", [
      group([
        animate(
          "40ms ease-in-out",
          style({
            opacity: "0"
          })
        ),
        animate(
          "600ms ease-in-out",
          style({
            "max-height": "0px"
          })
        ),
        animate(
          "700ms ease-in-out",
          style({
            visibility: "hidden"
          })
        )
      ])
    ]),
    transition("out => in", [
      group([
        animate(
          "1ms ease-in-out",
          style({
            visibility: "visible"
          })
        ),
        animate(
          "600ms ease-in-out",
          style({
            "max-height": "500px"
          })
        ),
        animate(
          "800ms ease-in-out",
          style({
            opacity: "1"
          })
        )
      ])
    ])
  ]),
  trigger("slideInOutUp", [
    transition(":leave", [
      style({ zIndex: "1" }),
      animate("400ms ease-in", style({ transform: "translateY(-100%)" })),
      transition(":enter", [
        style({ transform: "translateY(-100%)", zIndex: "1" }),
        animate(
          "400ms ease-in",
          style({ transform: "translateY(0%)", zIndex: "1" })
        )
      ])
    ])
  ]),
  trigger("shrinkOut", [
    state("in", style({ height: "*" })),
    transition("* => void", [
      style({ height: "*" }),
      animate(250, style({ height: 0 }))
    ])
  ])
];