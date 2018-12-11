package com.codecool.dartvaders.dao.implementation;

import com.codecool.dartvaders.dao.PlayerDao;
import com.codecool.dartvaders.model.Player;

public class PlayerDaoJdbc implements PlayerDao {

    @Override
    public void register(Player player) {

    }

    @Override
    public boolean isUsernameTaken(String username) {
        return false;
    }

    @Override
    public String getHashByUsername(String username) {
        return null;
    }

    @Override
    public Player getCostumerByUsername(String username) {
        return null;
    }
}
