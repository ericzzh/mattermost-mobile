// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import {Client} from '@client/rest';
import NetworkManager from '@managers/network_manager';

export const getGroupsForChannel = async (serverUrl: string, channelId: string) => {
    let client: Client;
    try {
        client = NetworkManager.getClient(serverUrl);
        return client.getAllGroupsAssociatedToChannel(channelId);
    } catch (error) {
        return undefined;
    }
};

export const getGroupsForTeam = async (serverUrl: string, teamId: string) => {
    let client: Client;
    try {
        client = NetworkManager.getClient(serverUrl);
        return client.getAllGroupsAssociatedToTeam(teamId);
    } catch (error) {
        return undefined;
    }
};

export const getGroupsForAutocomplete = async (serverUrl: string, query: string) => {
    let client: Client;
    try {
        client = NetworkManager.getClient(serverUrl);
        return client.getGroups(query);
    } catch (error) {
        return [];
    }
};

export const getMembershipsForGroup = async (serverUrl: string, groupId: string) => {
    let client: Client;
    try {
        client = NetworkManager.getClient(serverUrl);
        return client.getAllMembershipsAssociatedToGroup(groupId);
    } catch (error) {
        return undefined;
    }
};

export const getTeamsForGroup = async (serverUrl: string, groupId: string) => {
    let client: Client;
    try {
        client = NetworkManager.getClient(serverUrl);
        return client.getAllTeamsAssociatedToGroup(groupId);
    } catch (error) {
        return undefined;
    }
};

export const getChannelsForGroup = async (serverUrl: string, groupId: string) => {
    let client: Client;
    try {
        client = NetworkManager.getClient(serverUrl);
        return client.getAllChannelsAssociatedToGroup(groupId);
    } catch (error) {
        return undefined;
    }
};
