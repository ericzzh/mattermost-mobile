// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import React from 'react';
import {Alert, Platform, ScrollView, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {changeOpacity, makeStyleSheetFromTheme} from '@app/utils/theme';
import {useTheme} from '@context/theme';
import {t} from '@i18n';
import SettingOption from '@screens/settings/setting_option';

const getStyleSheet = makeStyleSheetFromTheme((theme) => {
    return {
        container: {
            flex: 1,
            backgroundColor: theme.centerChannelBg,
        },
        wrapper: {
            backgroundColor: changeOpacity(theme.centerChannelColor, 0.06),
            ...Platform.select({
                ios: {
                    flex: 1,
                    paddingTop: 35,
                },
            }),
        },
        divider: {
            backgroundColor: changeOpacity(theme.centerChannelColor, 0.1),
            height: 1,
            width: '100%',
        },
    };
});

type NotificationsProps = {
    isCRTEnabled: boolean;
    enableAutoResponder: boolean;
}
const Notifications = ({isCRTEnabled, enableAutoResponder}: NotificationsProps) => {
    const theme = useTheme();
    const styles = getStyleSheet(theme);

    let mentionsI18nId = t('mobile.notification_settings.mentions_replies');
    let mentionsI18nDefault = 'Mentions and Replies';
    if (isCRTEnabled) {
        mentionsI18nId = t('mobile.notification_settings.mentions');
        mentionsI18nDefault = 'Mentions';
    }

    const onPressHandler = () => {
        return Alert.alert(
            'The functionality you are trying to use has not yet been implemented.',
        );
    };

    return (
        <SafeAreaView
            edges={['left', 'right']}
            testID='notification_settings.screen'
            style={styles.container}
        >
            <ScrollView
                contentContainerStyle={styles.wrapper}
                alwaysBounceVertical={false}
            >
                <View style={styles.divider}/>
                <SettingOption
                    defaultMessage={mentionsI18nDefault}
                    i18nId={mentionsI18nId}
                    onPress={onPressHandler}
                    optionName='mentions'
                />
                <SettingOption
                    optionName='push_notification'
                    onPress={onPressHandler}
                />
                {enableAutoResponder && (
                    <SettingOption
                        onPress={onPressHandler}
                        optionName='automatic_dm_replies'
                    />
                )}
                <View style={styles.divider}/>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Notifications;
