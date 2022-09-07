input.onSound(DetectedSound.Quiet, function () {
    basic.showIcon(IconNames.Asleep)
})
input.onSound(DetectedSound.Loud, function () {
    basic.showIcon(IconNames.Surprised)
})
input.setSoundThreshold(SoundThreshold.Loud, 128)
input.setSoundThreshold(SoundThreshold.Quiet, 64)
