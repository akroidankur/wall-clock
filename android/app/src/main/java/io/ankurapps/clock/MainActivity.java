package io.ankurapps.clock;

import android.os.Bundle;
import android.view.WindowManager.LayoutParams;
import com.getcapacitor.BridgeActivity;

public class MainActivity extends BridgeActivity {
    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        getWindow().addFlags(LayoutParams.FLAG_KEEP_SCREEN_ON);
    }
}
