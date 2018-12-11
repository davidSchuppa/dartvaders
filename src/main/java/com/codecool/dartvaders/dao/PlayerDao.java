package com.codecool.dartvaders.dao;

import com.codecool.dartvaders.model.Player;

public interface PlayerDao {

    void register(Player player);
    boolean isUsernameTaken(String username);
    String getHashByUsername(String username);
    Player getPlayerByUsername(String username);


}
