<template lang="html">
  <div class="qm-loading-mark" v-show="isShow">
    <div class="qm-loading-wrap">
      <slot>
        <div class="qm-loading-icon"></div>
        <div class="qm-loading-cont">{{tip}}</div>
      </slot>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'qmLoading',
    props: {
      isShow: {
        type: Boolean,
        default: false
      }
    },
    mounted () {
    },
    data() {
      return {
        tip: '加载中...'
      }
    },
    methods: {},
    watch: {}
  }
</script>
<style lang="scss">
  * {
    padding: 0;
    margin: 0;
  }

  .qm-loading-mark {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 999;

  .qm-loading-wrap {
    position: fixed;
    padding: 15px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 6px;
    text-align: center;
    z-index: 3;
    color: #fff;
    background: rgba(0, 0, 0, 0.7);

  .qm-loading-icon {
    width: 40px;
    height: 40px;
    margin: 0 auto;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAABO1BMVEX///9aXFlbW1tdXV1fX19iZGFjY2NkYmVlZWWytLFra2ttbW1zc3N0dHRzdXJ0dnN6fHl7e3t8en18fnt9fX2CgoKChIGDg4OEhISEgoWEhoOFhYWLi4uMjouNjY309vOTk5OUlpOVlZWVl5SWlJezs7OanJmbm5udnZ2jo6OlpaWmpqarq6usqq2tra3z8/OytLGzs7O1tbW2tra6vLm8vLy8vru9vb2+vr6+vL/Dw8PEwsXExsPLy8vMzsvNzc3T09PU1tPV1dXb29vY3dfa3Nnc2t3c3Nzd3d3j4+Pi5OHk5OTl5eXr6+vq7Ons6u3t7e3z8/P19fX09vP29vb7+/v6/Pn7/fr8/Pz9/f36//n7//r8/vv9//z+/P/+/v76//n7/fr7//r8/Pz8/vv9/f39//z+/P/+/v4BUWsqAAAAYHRSTlMABQUHCQ4OEBAUFxohISMjKiosLCwxMzMzNjY2PT8/REZJSUtLS1BQUllbW2JlZWVsbG5udXV3d3d6foGBiIqKkZOTmJqampqaoaSkpKutra20trm5vcDAwMDCwsLCwsKegJjAAAABjElEQVQYGe3B6VbTUBgF0CNIxJTZIUoRAWW0IIOKAhUZChShFGurn34pRc5F3v8JLGth4w+arpvIL7I3wo2/fn4fMeyKob+DyPqUddUBRDXKc/L890vYWPtWeIErfcq66gAsHCqp07iSU1J3YGFYWFfBXwtfS/MIbH3pQripM5KniiZEMgjXLaS5+IwmhpfQyrJSvruI4WFmGrdTKt2OONbFyAyim1CS6sJC96cpBD7y0iQsHBhpQ8MbkqeahoW3UkSgo0JqAVZc/Kszu7eIRCIOZ1P2exBDgWQFUawczwF4oCR1DPaeyJmkgP4TkjoCe0+r9F0ABz5ZQhSzG6O4tHqUdZBI/A9jcx7iyCklAxszhTUEepU0ZVjoF+osGh5rrfbrJywMCfkBgVKt9mMbNvJ+5R4CnVvF97DjIHFz3mnRQzOvllNoIaM0ZTSRPTHluwi3SxrxcD0lOYJwiz6NOLheTqkuWsipTKLh0V7eQ2BlPY2W7iDgiDHiILoh1j1DdI6S2oEYBvfzHm7WH90WVaa3GYffAAAAAElFTkSuQmCC) no-repeat;
    background-size: 100%;
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
    -webkit-animation: ani-rotate 1.2s infinite ease;
    animation: ani-rotate 1.2s infinite ease;
  }

  .qm-loading-cont {
    margin-top: 8px;
    font-size: 12px;
  }

  }
  @-webkit-keyframes ani-rotate {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg)
    }
    to {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg)
    }
  }

  @keyframes ani-rotate {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg)
    }
    to {
      -webkit-transform: rotate(1turn);
      transform: rotate(1turn)
    }
  }

  }

</style>
