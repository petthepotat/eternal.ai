import * as ffmpeg from 'fluent-ffmpeg';
import * as fs from 'fs';

const inputFile = 'path/to/input.mp4';
const outputFile = 'path/to/output.mp4';
const framesOutputDir = 'path/to/frames';

// Create a new FFmpeg process
const ffmpegCommand = ffmpeg(inputFile)
// Slow down the video by a factor of 0.5
.withFps(0.5)
// Set the output file
.output(outputFile)
// Extract a frame every second and save them to the framesOutputDir
.output(`${framesOutputDir}/frame%d.png`)
// Run the process
.run();

// Listen for the 'end' event to know when the process is finished
ffmpegCommand.on('end', () => {
    console.log(`Video file ${outputFile} has been created.`);
    console.log(`Frames have been extracted and saved to ${framesOutputDir}`);
});



