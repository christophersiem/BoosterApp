package de.neuefische.boosterapp.utils;

import de.neuefische.boosterapp.db.BoosterMongoDb;
import de.neuefische.boosterapp.db.UserDb;
import de.neuefische.boosterapp.model.Booster;
import org.springframework.stereotype.Service;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

import static de.neuefische.boosterapp.model.BoosterType.*;


@Service
public class BoosterUtils {
    private final BoosterMongoDb boosterMongoDb;
    private final UserUtils idUtils;
    private final UserDb userDb;

    public BoosterUtils(BoosterMongoDb boosterMongoDb, UserUtils idUtils, UserDb userDb) {
        this.boosterMongoDb = boosterMongoDb;
        this.idUtils = idUtils;
        this.userDb = userDb;
    }



    public static String getYoutubeId(String url) {
        String pattern = "https?://(?:[0-9A-Z-]+\\.)?(?:youtu\\.be/|youtube\\.com\\S*[^\\w\\-\\s])([\\w\\-]{11})(?=[^\\w\\-]|$)(?![?=&+%\\w]*(?:['\"][^<>]*>|</a>))[?=&+%\\w]*";

        Pattern compiledPattern = Pattern.compile(pattern,
                Pattern.CASE_INSENSITIVE);
        Matcher matcher = compiledPattern.matcher(url);
        if (matcher.find()) {
            return matcher.group(1);
        }
        return null;
    }

    public void createStandardBooster(String ownerId){

        boosterMongoDb.save((new Booster(idUtils.generateRandomId(), JOY, "1b764dc5-9bf2-455c-9563-6ff54d0b5b9d", "MoodBoost", ownerId, "Smile", "Life is short. Smile while you still have teeth :-)", "ekIMGAmgXSI","https://www.rd.com/wp-content/uploads/2019/09/GettyImages-621924830.jpg")));
        boosterMongoDb.save((new Booster(idUtils.generateRandomId(), CALM, "1b764dc5-9bf2-455c-9563-6ff54d0b5b9d", "MoodBoost", ownerId, "Relax", "“You are the sky. Everything else – it’s just the weather. (Pema Chödrön)” ", "7maJOI3QMu0", "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1653&q=80")));
        boosterMongoDb.save((new Booster(idUtils.generateRandomId(), CONFIDENCE, "1b764dc5-9bf2-455c-9563-6ff54d0b5b9d", "MoodBoost", ownerId, "Focus", "Confidence awakens Confidence.", "u_ktRTWMX3M","https://images.unsplash.com/photo-1545281011-95796d6f27ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1652&q=80")));
    }


}
