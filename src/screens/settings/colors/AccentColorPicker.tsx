import { Theme } from '@/models/theme'
import { observer } from 'mobx-react-lite'
import { memo } from 'react'
import { View } from 'react-native'
import { Divider, List, TextInput } from 'react-native-paper'
import ColorPicker, {
	HueSlider,
	Preview,
	Swatches,
} from 'reanimated-color-picker'

export default observer(function AccentColorPicker() {
	return (
		<List.Section title="Акценты">
			<List.Item title="Цвет акцентов" />

			<View style={{ paddingHorizontal: Spacings.s2 }}>
				<TextInput
					label="accent"
					value={Theme.accent}
					defaultValue="#ff0000"
					onChangeText={value =>
						runInAction(() => {
							Theme.accent = value
						})
					}
					placeholder="#ff0000"
				/>
			</View>

			<List.Item
				title="Очистить использованные цвета"
				onPress={Theme.manage.clearSelectedAccentColors}
				left={props => <List.Icon icon="delete" {...props} />}
			/>
		</List.Section>
	)
})
// eslint-disable-next-line mobx/missing-observer
const ColorPickerPanel = memo(function ColorPickerPanel() {
	// eslint-disable-next-line @typescript-eslint/naming-convention
	return [Preview, HueSlider].map((Element, i) => (
		<View key={i.toString()}>
			<Element />
			<Divider style={{ margin: 8 }} />
		</View>
	))
})
