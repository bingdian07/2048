/**
 * Created by Administrator on 2017/5/30.
 */
window.requestAnimationFrame(function() {
    new GameManager(4, KeyboardInputManager, HTMLActuator, LocalStorageManager);
});