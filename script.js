function selectMood() {
  const mood = document.getElementById('mood').value;

  // Mood names and image file names
  const moodData = {
    happy: {
      name: "Happy",
      image: "happy.png"
    },
    sad: {
      name: "Sad",
      image: "sad.png"
    },
    angry: {
      name: "Angry",
      image: "angry.png"
    },
    excited: {
      name: "Excited",
      image: "excited.png"
    },
    tired: {
      name: "Tired",
      image: "tiredbored.png"
    },
    anxious: {
      name: "Anxious",
      image: "anxious.png"
    }
  };

  // Set text and image
  document.getElementById('selectedMoodText').innerText = "Today I feel: " + moodData[mood].name;
  document.getElementById('selectedMoodImage').src = moodData[mood].image;
  document.getElementById('moodDisplay').style.display = 'block';
}