import { Switch, Text, TouchableOpacity, View } from 'react-native';
import { getAlarmState, getAllAlarms, disableAlarm, enableAlarm } from '../alarm';
import React, { useEffect, useState } from 'react';
import { colors, globalStyles } from '../../App.tsx';
import { getAlphabeticalDays } from '../util/Helper.ts';

export default function ({ navigation }: any) {
    const [alarms, setAlarms] = useState<any>(null);
    const [scheduler, setScheduler] = useState<any>(null);

    useEffect(() => {
        navigation.addListener('focus', async () => {
            setAlarms(await getAllAlarms());
            setScheduler(setInterval(fetchState, 10000));
        });
        navigation.addListener('blur', async () => {
            clearInterval(scheduler);
        });
        fetchState();
    }, []);

    async function fetchState() {
        const alarmUid = await getAlarmState();
        if (alarmUid) {
            navigation.navigate('Ring', { alarmUid });
        }
    }

    return (
        <View style={globalStyles.container}>
            <View style={globalStyles.innerContainer}>
                {alarms && alarms.length ?
                    alarms.map((a: any) => (
                        <TouchableOpacity onPress={() => navigation.navigate('Edit', { alarm: a })} style={{
                            alignItems: 'center',
                            flexDirection: 'row',
                        }}>
                            <View style={{
                                margin: 5,
                                flex: 1,
                                alignItems: 'flex-start',
                            }}>
                                <Text style={{
                                    color: 'black',
                                    fontSize: 35,
                                    fontWeight: 'bold',
                                }}>
                                    {a.hour < 10 ? '0' + a.hour : a.hour}:
                                    {a.minutes < 10 ? '0' + a.minutes : a.minutes}
                                </Text>
                                <View style={{
                                    flexDirection: 'row',
                                    // color: 'grey',
                                }}>
                                    <Text>{getAlphabeticalDays(a.days)}</Text>
                                </View>
                            </View>
                            <View style={{
                                margin: 5,
                                marginRight: 0,
                                flex: 1,
                                alignItems: 'flex-end',
                            }}>
                                <Switch
                                    ios_backgroundColor={'black'}
                                    trackColor={{ false: colors.GREY, true: colors.BLUE }}
                                    value={a.isActive}
                                    onValueChange={async (active) => {
                                        if (active) {
                                            await enableAlarm(a.uid);
                                        } else {
                                            await disableAlarm(a.uid);
                                        }
                                    }}
                                />
                            </View>
                        </TouchableOpacity>
                    )) :
                    <Text>No alarms</Text>
                }
            </View>
        </View>
    );
}