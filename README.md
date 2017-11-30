# SSUI Homework 6

By Jia Zheng (jzheng2@andrew.cmu.edu)

**Notes**

Please use Chrome/Firefox as Edge does not support certain features used.

Link to website [here](https://jzheng13.github.io/SSUI-Homework-6).

Formatted write-up [here](doc/assign6-writeup-ssui.pdf).

## Summary

My project of choice is an informational tool that'll teach the user about the solar system. The target audience of the web application will be space enthusiasts and anyone looking for basic information and trivia about the solar system.

## Interactions

As we want to make user interactions a priority, the aim will be to create a single page web application which is transition-heavy. For instance, having the loading screen mimic the ``Big Bang'', allowing users to select the sun/planet/satellite they wish to observe by clicking the corresponding component. We also created moving instead of static components. After selecting a target, a pop-up modal will be triggered, allowing the user to view detailed information about the target.

## Technical and design challenges

As part of the requirements for the project, the `Anime.js` JavaScript library was used for dynamic DOM animations. We also used `d3.js` for charts and transitions.

The web application has support for different screen sizes and devices as well as detailed affordances.

## Problems encountered

`Anime.js` does not have a large base of users thus there was difficulty finding more detailed documentation and examples on using the library. In particular, when trying to implement moving objects, we find that the motion of the path was off even though the implementation was exactly as stated in the documentation.

Additionally, writing the CSS was also challenging for this assignment. Our original aim was to allow users to click on the target before displaying a pop-up modal. However, since the moving planets have a higher `z-index` than the orbit itself, we can only detect click events on the planets. Since the planets can rotate at very high velocities, it's not viable to only allow the user to select the target. Thus, we had to add a side navigation panel.

## Resources Used

1. Anime.js by Julian Garnier.
   http://animejs.com/

2. d3.js by Mike Bostock.
   https://d3js.org/

3. Solar System Exploration, NASA Science. 
   https://solarsystem.nasa.gov/planets/

4. Planet images by JohnAlemaker.
   https://pixabay.com/en/users/JohnAlemaker-5138849/




