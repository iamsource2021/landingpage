import { animated, useTransition } from '@react-spring/web'


export const AnimatedRoute = ({ children }) => {
  const transitions = useTransition(children, {
    from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
    enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
  })

  return transitions((style, item) => (
    <animated.div style={style}>{item}</animated.div>
  ))
};